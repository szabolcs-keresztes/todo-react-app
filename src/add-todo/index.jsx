import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; 

import get from 'lodash.get';

import { Button } from 'react-bootstrap';

import {
    createTodo,
    updateTodoName
} from './action-creators';

class AddTodo extends Component {

    static propTypes = {
        todoName: PropTypes.string,
        actions: PropTypes.shape({
            updateTodoName: PropTypes.func,
            createTodo: PropTypes.func,
        }),
    }

    render() {
        return (
            <div>
                <input 
                    type='text'
                    placeholder='New Task...'
                    value={this.props.todoName}
                    onChange={(e) => {
                        this.props.actions.updateTodoName(e.target.value);
                    }}
                />
                <Button onClick={() => this.props.actions.createTodo(this.props.todoName)}>
                    Create
                </Button>    
            </div>
        );  
    }

}

const mapStateToProps = state => {
    return {
        todoName: get(state, 'todoApp.newTodo.name', ""),
    };
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({
            updateTodoName,
            createTodo,
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
