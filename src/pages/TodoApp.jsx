import { useState } from "react"
import { AddTodo } from "../components/AddTodo";
import { TodoListItem } from "../components/TodoListItem";

export const TodoApp = () => {

  // Lógica para almacenar los todos
  const [todoList, setTodosList] = useState([]);
  // Lógica para añadir un todo
  const [todo, setTodo] = useState('');

  // 
  const inputChange = (e) => {
    setTodo(e.target.value);
  }

  // Lógica para completar un todo

  const completeTodo = (id) => {
    const updateTodos = todoList.map((todoItem) => {
      if (todoItem.id === id) {
        return { ...todoItem, done: !todo.done };
      }
      return todoItem;
    });

    setTodosList(updateTodos)
  }

  const addTodo = () => {
    if (todo.trim() !== '') {
      const newTodoItem = {
        id: Date.now(),
        desc: todo,
        done: false,
      };
      setTodosList([...todoList, newTodoItem]);
      setTodo("");
    }
  }

  return (
    <div className="container">
      {/* Header */}
      <div className="row">
        <div className="col-12">
          <h1>TodoApp</h1>
        </div>
      </div>

      {/* TodoFilter */}
      <div className="row mb-3">
        <div className="col d-flex gap-1">
          <button className="btn btn-sm btn-primary">All</button>
          <button className="btn btn-sm btn-success">Active</button>
          <button className="btn btn-sm btn-danger">Completed</button>
          <button className="btn btn-sm btn-warning">Clear Completed</button>
        </div>
      </div>

      {/* TodoAdd */}
      <div className="row mb-3">
        <AddTodo todo={todo} inputChange={inputChange} addTodo={addTodo} />

        {/* TodoList */}
        <TodoListItem todoList={todoList} completeTodo={completeTodo} />
      </div>
    </div>
  );
};
