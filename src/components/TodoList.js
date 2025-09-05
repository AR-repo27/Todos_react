// src/components/TodoList.jsx
import React from 'react';
import TodoItem from './TodoItem';
import { ListGroup } from 'react-bootstrap';

function TodoList({ todos, deleteTodo, toggleComplete, editTodo }) {
  return (
    <ListGroup className='w-75 mx-auto'>
      {todos.length === 0 ? (
        <p className="text-center">No todos yet! Add one.</p>
      ) : (
        todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            deleteTodo={deleteTodo} 
            toggleComplete={toggleComplete} 
            editTodo={editTodo} 
          />
        ))
      )}
    </ListGroup>
  );
}

export default TodoList;