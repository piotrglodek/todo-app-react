import React from "react";
import styled from "styled-components";
import { TaskItem } from "./App";

const GridItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: #efefef;
  padding: 8px 14px;
`;

const DeleteIcon = styled.span``;
const DeleteButton = styled.button`
  display: flex;
  padding: 10px;
  margin: 0;
  background: transparent;
  outline: none;
  border: none;
  border-radius: 50%;
  transition: color, background-color 0.2s ease;
  &:hover {
    color: #ffffff;
    background-color: #f44336;
    cursor: pointer;
  }
`;

type TaskProps = TaskItem & {
  deleteTask: () => void;
};

export const Task = ({ id, deleteTask, text }: TaskProps) => {
  return (
    <GridItem>
      {text}
      <DeleteButton onClick={deleteTask}>
        <DeleteIcon className="material-symbols-outlined">delete</DeleteIcon>
      </DeleteButton>
    </GridItem>
  );
};
