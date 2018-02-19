import * as actionTypes from "./action-types";

import todoWebApi from "../todoWebApi";

export const requestTodos = () => {
    return {
        type: actionTypes.REQUEST_TODOS,
    };
}

export const receiveTodos = (todos) => {
    return {
        type: actionTypes.RECEIVE_TODOS,
        todos,
    };
}

export const failureTodos = (message) => {
    return {
        type: actionTypes.FAILURE_TODOS,
        message,
    };
}

export const fetchTodos = () => {
    return dispatch => {
        dispatch(requestTodos());
        return todoWebApi.get()
            .then(todos => {
                dispatch(receiveTodos(todos));
            })
            .catch(error => {
                dispatch(failureTodos(error));
            })
    }
}
