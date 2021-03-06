import axios from 'axios';

class TodoDataService{
    retrieveAllTodos(username){
        return axios.get(`http://localhost:8080/jpa/users/${username}/todos`);
    }
    retrieveTodoByID(username, id){
        return axios.get(`http://localhost:8080/jpa/users/${username}/todos/${id}`);
    }
    deleteTodoById(username, id){
        return axios.delete(`http://localhost:8080/jpa/users/${username}/todos/${id}`);
    }
    updateTodoById(username, id, todo){
        return axios.put(`http://localhost:8080/jpa/users/${username}/todos/${id}`, todo);
    }
    createTodo(username, todo){
        return axios.post(`http://localhost:8080/jpa/users/${username}/todos/`, todo);
    }
}

export default new TodoDataService();