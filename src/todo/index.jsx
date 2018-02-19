import React, { Component } from 'react';
import PropTypes from "prop-types";

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; 

import {
    removeTodo,
    completeTodo,
} from "./action-creators";

class Todo extends Component {
    
    static propTypes = {
        todo: PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            isCompleted: PropTypes.bool,
        }),
        actions: PropTypes.shape({
            removeTodo: PropTypes.func,
            completeTodo: PropTypes.func,
        }),
    }

    render() {
        return (
            <div>
                <p style={{textDecoration: this.props.todo.isCompleted ? "line-through": ""}} onClick={() => this.props.actions.completeTodo(this.props.todo.id, this.props.todo)}>
                    {this.props.todo.name}
                </p>
                <button onClick={() => this.props.actions.removeTodo(this.props.todo.id)}>
                    Remove
                </button>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({
            removeTodo,
            completeTodo,
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
