import guid from "guid";

import * as actionTypes from "./action-types";

import todoWebApi from "../todoWebApi";

export const createTodoAttempt = () => {
    return {
        type: actionTypes.CREATE_TODO_ATTEMPT,
    };
}

export const createTodoSuccess = todo => {
    return {
        type: actionTypes.CREATE_TODO_SUCCESS,
        todo,
    };
}

export const createTodoFailure = message => {
    return {
        type: actionTypes.CREATE_TODO_FAILURE,
        message,
    };
}

export const createTodo = name => {
    return dispatch => {
        dispatch(createTodoAttempt());

        return todoWebApi.post({
            id: guid.create().value,
            name,
            isCompleted: false, 
        }).then(todo => {            
            dispatch(createTodoSuccess(todo));
        }).catch(message => {
            dispatch(createTodoFailure(message));  
        });
    }
}

export const updateTodoName = newName => {
    return {
        type: actionTypes.UPDATE_TODO_NAME,
        newName,
    };   
}
