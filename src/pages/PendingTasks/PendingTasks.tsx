import React from "react";
import { Task } from "../../types";
import styled from "styled-components";

interface PendingTasksProps {
  tasks: Task[];
}

const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 800px;
  color: #e0e0e0;
  font-family: Arial, sans-serif;
  padding: 20px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  width: 50vw;
`;

const ListTitle = styled.h1`
  text-align: center;
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
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};

  &:hover {
    background-color: #2a2a2a;
  }
`;

const PendingTasks: React.FC<PendingTasksProps> = ({ tasks }) => {
  const pendingTasks = tasks.filter((task) => !task.completed);

  return (
    <DivContent>
      <ListTitle>Pending Tasks</ListTitle>

      <List>
        {pendingTasks.map((task) => (
          <ListItem key={task.id} completed={task.completed}>
            {task.name}
          </ListItem>
        ))}
      </List>
    </DivContent>
  );
};

export default PendingTasks;
