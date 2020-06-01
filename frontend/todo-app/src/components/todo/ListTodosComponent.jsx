import React, {Component} from 'react';
import TodoDataService from '../../api/todo/TodoDataService';
import AuthenticationService from './AuthenticationService';
import moment from 'moment';

class ListTodosComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            message: '',
            todos:[
                // {id: 1, description: "Learn React properly", done: false, targetDate: new Date()},
                // {id: 2, description: "Learn MEAN stack by 2020" , done: false, targetDate: new Date()},
                // {id: 3, description: "Become an expert in Full Stack", done: false, targetDate: new Date()}
            ]
        };
        this.deleteTodo = this.deleteTodo.bind(this);
        this.refreshTodos = this.refreshTodos.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.addTodo = this.addTodo.bind(this);
        // this.sortById = this.sortById.bind(this);
    }

    deleteTodo(id){
        let username = AuthenticationService.getLoggedInUser();
        TodoDataService.deleteTodoById(username, id)
        .then(response => {this.setState({message: `Todo ${id} successfully removed`})
              this.refreshTodos()
            //   this.sortById()
        });
    }

    updateTodo(id){
        this.props.history.push(`/todos/${id}`)
        // let username = AuthenticationService.getLoggedInUser();
        // TodoDataService.updateTodoById(username, id)
        // .then(response => {this.setState({message: `Todo ${id} updated successfully`})
        //       this.refreshTodos();
        // });
    }

    addTodo(){
        this.props.history.push(`/todos/-1`)
    }

    refreshTodos(){
        let username = AuthenticationService.getLoggedInUser();
        TodoDataService.retrieveAllTodos(username)
        .then(response => {this.setState({todos: response.data})});
    }

    // sortById(){
    //     const {todos} = this.state;
    //     todos.sort((a,b) => a.id - b.id);
    //     this.setState({todos})
    // }
    
    componentDidMount(){
        this.refreshTodos();
    }
    render(){
        return(
            <div className="container">
            <div className="jumbotron">
                <h1>List Todos</h1>
                {this.state.message && <h3 className="alert alert-danger">{this.state.message}</h3>}
            </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Is Completed?</th>
                            <th>Target Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(todo =>
                            <tr key={todo.id}>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{moment(todo.targetDate).format("DD-MM-YYYY")}</td>
                                <td><button className="btn btn-success" onClick={() => this.updateTodo(todo.id)}>Update</button></td>
                                <td><button className="btn btn-warning" onClick={() => this.deleteTodo(todo.id)}>Delete</button></td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
                <div className="row">
                        <button className="btn btn-success" onClick={this.addTodo}>Add</button>
                </div>
            </div>
        );
    }
}

export default ListTodosComponent;