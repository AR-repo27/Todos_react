// src/components/TodoItem.jsx
import React, { useState } from 'react';
import { ListGroup, Button, Form } from 'react-bootstrap';

function TodoItem({ todo, deleteTodo, toggleComplete, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleEdit = () => {
    if (isEditing) {
      editTodo(todo.id, newTitle);
    }
    setIsEditing(!isEditing);
  };

  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      {isEditing ? (
        <Form.Control 
          type="text" 
          value={newTitle} 
          onChange={(e) => setNewTitle(e.target.value)} 
        />
      ) : (
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.title}
        </span>
      )}
      <div className='d-flex ms-2'>
        <Button variant="success" size="sm" onClick={() => toggleComplete(todo.id)} className="me-2">
          {todo.completed ? 'Undo' : 'Complete'}
        </Button>
        <Button variant="warning" size="sm" onClick={handleEdit} className="me-2">
          {isEditing ? 'Save' : 'Edit'}
        </Button>
        <Button variant="danger" size="sm" onClick={() => deleteTodo(todo.id)}>
          Delete
        </Button>
      </div>
    </ListGroup.Item>
  );
}

export default TodoItem;