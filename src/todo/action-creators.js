import * as actionTypes from "./action-types";

import todoWebApi from "../todoWebApi"

export const removeTodoAttempt = todoId => {
    return {
        type: actionTypes.REMOVE_TODO_ATTEMPT,
        todoId,
    };
}

export const removeTodoSuccess = todoId => {
    return {
        type: actionTypes.REMOVE_TODO_SUCCESS,
        todoId,
    };
}

export const removeTodoFailure = message => {
    return {
        type: actionTypes.REMOVE_TODO_FAILURE,
        message,
    };
}

export const removeTodo = todoId => {
    return dispatch => {
        dispatch(removeTodoAttempt(todoId));
        todoWebApi.delete(todoId)
            .then(() => {
                dispatch(removeTodoSuccess(todoId));
            })
            .catch(message => {
                dispatch(removeTodoFailure(message));
            })
    }
}

export const completeTodoAttempt = todoId => {
    return {
        type: actionTypes.COMPLETE_TODO_ATTEMPT,
        todoId,
    };
}

export const completeTodoSuccess = updatedTodo => {
    return {
        type: actionTypes.COMPLETE_TODO_SUCCESS,
        updatedTodo,
    };
}

export const completeTodoFailure = message => {
    return {
        type: actionTypes.COMPLETE_TODO_FAILURE,
        message,
    };
}

export const completeTodo = (todoId, todo) => {
    return dispatch => {
        dispatch(completeTodoAttempt(todoId));
        const updatedTodo = {
            id: todo.id,
            name: todo.name,
            isCompleted: !todo.isCompleted,
        };
        console.log(updatedTodo.isCompleted);
        todoWebApi.put(todoId, updatedTodo)
            .then(() => {
                dispatch(completeTodoSuccess(updatedTodo));
            })
            .catch(message => {
                dispatch(completeTodoFailure(message));
            })
    }
}
