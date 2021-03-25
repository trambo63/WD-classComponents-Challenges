import React, { Component } from "react";
import {Input} from 'reactstrap';

export default class ToDoIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            todoList: [],
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        this.setState({input: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.input);
        this.setState({todoList: [...this.state.todoList, this.state.input]})
    }

    handleClick(index){
        const todoList = this.state.todoList;

        todoList.splice(index, 1);
        this.setState({todoList: todoList});
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <Input placeholder='Add a task' type='text' value={this.state.input} onChange={this.handleInput}/>
                    <button type="submit" value="Submit">add</button>
                </form>
                <div>
                    <h2>To Do List</h2>
                    <ul>
                        {this.state.todoList.map((todo, i) => {
                            return <li key={i}>{todo}<button onClick={() => this.handleClick(i)}>Done</button></li>
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

