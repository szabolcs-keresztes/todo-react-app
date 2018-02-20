import React, { Component } from 'react';
import PropTypes from "prop-types";

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; 

import {
    Button,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input
} from "reactstrap";

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
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <Input 
                                addon
                                type="checkbox"
                                checked={this.props.todo.isCompleted}
                                onChange={() => this.props.actions.completeTodo(this.props.todo.id, this.props.todo)} />
                        </InputGroupText>
                    </InputGroupAddon>
                    <InputGroupText style={{textDecoration: this.props.todo.isCompleted ? "line-through": ""}}>
                        {this.props.todo.name}
                    </InputGroupText>
                    <InputGroupAddon addonType="prepend">
                        <Button onClick={() => this.props.actions.removeTodo(this.props.todo.id)}>
                            Remove
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
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
