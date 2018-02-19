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

export const completeTodoSuccess = todoId => {
    return {
        type: actionTypes.COMPLETE_TODO_SUCCESS,
        todoId,
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
        todoWebApi.put(todoId, {
            id: todo.id,
            name: todo.name,
            isCompleted: true,
        })
            .then(() => {
                dispatch(completeTodoSuccess(todoId));
            })
            .catch(message => {
                dispatch(completeTodoFailure(message));
            })
    }
}
