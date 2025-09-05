// src/components/TodoForm.jsx
import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap'; // Agar Bootstrap use kar rahe ho

function TodoForm({ addTodo }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(title);
    setTitle('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <Form.Control 
          type="text" 
          placeholder="Add a new todo..." 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <Button variant="primary" type="submit">Add</Button>
      </InputGroup>
    </Form>
  );
}

export default TodoForm;