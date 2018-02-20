import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';  

import {
    Container,
    Row,
} from "reactstrap";

import AddTodo from '../add-todo';
import TodoList from '../todo-list';

import { fetchTodos } from './action-creators';

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
        <div>
            <Container>
                <Row>
                    <header>
                        <h1>To Do List</h1>
                    </header>
                </Row>

                <Row>
                    <AddTodo />
                </Row>

                <Row>
                    <TodoList todos={this.props.todos} />
                </Row>
            </Container>
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