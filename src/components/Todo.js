import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { MdClose } from 'react-icons/md';
import { AiFillEdit } from 'react-icons/ai';
import { FiCheck } from 'react-icons/fi';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
    });

    const submitUpdate = (value) => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: '',
        });
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return todos.map((todo, index) => (
        <div
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index}
        >
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
                <FiCheck
                    onClick={() => completeTodo(todo.id)}
                    className="check-icon"
                />
                <MdClose
                    onClick={() => removeTodo(todo.id)}
                    className="delete-icon"
                />
                <AiFillEdit
                    onClick={() => setEdit({ id: todo.id, value: todo.text })}
                    className="edit-icon"
                />
            </div>
        </div>
    ));
};

export default Todo;
