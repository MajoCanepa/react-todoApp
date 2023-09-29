import React from "react";

export const TodoListItem = ({ todoList, completeTodo }) => {
    return (
        <div className="col-sm-12 col-md-8">
            <h3>Todo List</h3>
            <ul className="list-unstyled">
                {todoList.length === 0 ? (
                    <li className="alert alert-info">No hay tareas</li>
                ) : (
                    todoList.map((todoItem) => (
                        <li
                            key={todoItem.id}
                            className={`d-flex justify-content-between mb-2 alert ${todoItem.done ? 'alert-success' : 'alert-warning'
                                }`}
                        >
                            <span>{todoItem.desc}</span>
                            <button
                                className="btn btn-sm btn-primary"
                                onClick={() => completeTodo(todoItem.id)}
                            >
                                {todoItem.done ? 'Completado' : 'Pendiente'}
                            </button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    )
}