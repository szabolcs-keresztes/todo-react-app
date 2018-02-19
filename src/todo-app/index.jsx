import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';  

import AddTodo from '../add-todo';
import TodoList from '../todo-list';

import { fetchTodos } from './action-creators';

import './styles.css';

class TodoApp extends Component {

    static defaultProps = {
        todos: [],
    }

    static propTypes = {
        todos: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            isCompleted: PropTypes.bool,
        })),
        actions: PropTypes.shape({
            fetchTodos: PropTypes.func,
        }),
    }

    componentDidMount() {
        this.props.actions.fetchTodos();
    }

    render() {
        return (
        <div className="TodoApp">

            <header className="TodoApp-header">
                <h1 className="TodoApp-title">To Do List</h1>
            </header>

            <AddTodo />
            
            <TodoList todos={this.props.todos} />

        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todoApp.todos,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({
            fetchTodos,
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);