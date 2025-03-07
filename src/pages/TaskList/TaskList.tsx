// import React, { useEffect } from "react";
import React from "react";
import { Task } from "../../types";
import styled from "styled-components";

interface TaskListProps {
  tasks: Task[];
  onRemoveTask: (taskId: number) => void;
  onToggleTask: (taskId: number) => void;
}

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
  width: 50vw;
  min-width: 280px;
`;

const ListItem = styled.li<{ completed: boolean }>`
  background-color: #1e1e1e;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  font-size: 1rem;
  color: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.3s;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};

  &:hover {
    background-color: #2a2a2a;
  }
`;

const TaskInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Checkbox = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;

const Button = styled.button`
  min-width: 67px;
  padding: 5px 10px;
  background-color: #ed145b;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c10e49;
  }

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.95);
    background-color: #c10e49;
    box-shadow: none;
  }

  &:focus-visible {
    outline: 2px solid #c10e49;
  }
`;

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onRemoveTask,
  onToggleTask,
}) => {

  // useEffect(() => {
  //   console.log("A lista de tarefas foi atualizada:", tasks);
  // }, [tasks]);

  return (
    <List>
      {tasks.map((task) => (
        <ListItem key={task.id} completed={task.completed}>
          <TaskInfo>
            <Checkbox
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleTask(task.id)}
            />
            <span>{task.name}</span>
          </TaskInfo>
          <Button onClick={() => onRemoveTask(task.id)}>Delete</Button>
        </ListItem>
      ))}
    </List>
  );
};

export default TaskList;
