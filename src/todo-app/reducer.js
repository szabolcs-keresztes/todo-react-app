
import * as actionTypes from "./action-types";
import * as addTodoActionTypes from "../add-todo/action-types";
import * as todoActionTypes from "../todo/action-types";

const initialState = {
    todos: [],
    newTodo: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
    
    // Fetching todos
    
    case actionTypes.REQUEST_TODOS:
        console.log("Todos are being requested");
        return state;
    
    case actionTypes.RECEIVE_TODOS:
        console.log("Todos are being received");
        return {
            ...state,
            todos: action.todos,   
        };

    case actionTypes.FAILURE_TODOS:
        console.log("Requesting todos has been failed");
        return state;

    // Updating new todo's name

    case addTodoActionTypes.UPDATE_TODO_NAME:
        console.log("Updating new todo's name");
        return {
            ...state,
            newTodo: {
                ...state.newTodo,
                name: action.newName,
            },
        };

    // Creating new todo item

    case addTodoActionTypes.CREATE_TODO_ATTEMPT:
        console.log("Todo creation is attempted");
        return state;
    
    case addTodoActionTypes.CREATE_TODO_SUCCESS:
        console.log("Todo creation has been successful");
        return {
            ...state,
            todos: [
                ...state.todos,
                action.todo,
            ]   
        };

    case addTodoActionTypes.CREATE_TODO_FAILURE:
        console.log("Todo creation failed");
        return state;

    // Remove todo item

    case todoActionTypes.REMOVE_TODO_ATTEMPT:
        console.log("Remove todo is attempted");
        return state;
    
    case todoActionTypes.REMOVE_TODO_SUCCESS:
        console.log("Remove todo has been successful");
        return {
            ...state,
            todos: state.todos.filter(todo => todo.id !== action.todoId),
        };

    case todoActionTypes.REMOVE_TODO_FAILURE:
        console.log("Remove todo has been failed");
        return state;
    
    // Complete todo item

    case todoActionTypes.COMPLETE_TODO_ATTEMPT:
        console.log("Complete todo is attempted");
        return state;
    
    case todoActionTypes.COMPLETE_TODO_SUCCESS:
        console.log("Complete todo has been successful");
        return {
            ...state,
            todos: state.todos.map(todo => {
                if (todo.id === action.todoId) {
                    return {
                        id: todo.id,
                        name: todo.name,
                        isCompleted: true,
                    };
                }
                return todo;
            }),
        };

    case todoActionTypes.COMPLETE_TODO_FAILURE:
        console.log("Complete todo has been failed");
        return state;

    default: 
        return state;
    }
};