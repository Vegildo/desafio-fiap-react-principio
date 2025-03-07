import React, { useState } from "react";
import styled from "styled-components";

interface AddTaskProps {
  onAddTask: (task: string) => void;
}

const Form = styled.form`
  display: flex;
  gap: 10px;
  background-color: #1e1e1e;
  padding: 10px;
  border-radius: 8px;
  width: 60vw;
  min-width: 340px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #333;
  border-radius: 5px;
  background-color: #2a2a2a;
  color: #e0e0e0;

  &::placeholder {
    color: #888;
  }
`;

const Button = styled.button`
  min-width: 75px;
  padding: 10px 15px;
  background-color: #6200ea;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #3700b3;
  }
`;

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTask(taskName);
    setTaskName(""); // Limpa o campo de entrada após adicioná-lo
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Enter with a task"
      />
      <Button type="submit">Add Task</Button>
    </Form>
  );
};

export default AddTask;
