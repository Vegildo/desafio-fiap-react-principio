import React from "react";import { Task } from "../../types";
import styled from "styled-components";

interface CompletedTasksProps {
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
  margin: 20px 0;
  width: 50vw;
  min-width: 280px;
`;

const ListTitle = styled.h1`
  text-align: center;
`;

const ListItem = styled.li`
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
`;

const CompletedTasks: React.FC<CompletedTasksProps> = ({ tasks }) => {
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <DivContent>
      <ListTitle>Completed Tasks</ListTitle>
      <List>
        {completedTasks.map((task) => (
          <ListItem key={task.id}>
            <span>{task.name}</span>
            <span>
              {task.completedAt
                ? new Date(task.completedAt).toLocaleString()
                : ""}
            </span>
          </ListItem>
        ))}
      </List>
    </DivContent>
  );
};

export default CompletedTasks;
