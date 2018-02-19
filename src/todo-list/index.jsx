import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Todo from "../todo";

class TodoList extends Component {
    static defaultProps = {
        todos: [],
    }

    static propTypes = {
        todos: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            isCompleted: PropTypes.bool,
        })),
    }

    render() {
        return (
            <div>
                {this.props.todos.map(todo => (
                    <Todo key={todo.id} todo={todo} />
                ))}
            </div>
        );
    }
}

export default TodoList;