import React, { KeyboardEventHandler, ChangeEventHandler } from "react";
import styled from "styled-components";

const AppHeader = styled.header`
    width: 100%;
    background-color: #303f9f;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 1024px) {
      height: 60px;
    }
  `,
  Input = styled.input`
    overflow-x: auto;
    width: 220px;
    height: 28px;
    background-color: #fff;
    border: none;
    text-align: center;
    border-radius: 20px;
    color: #303f9f;
    outline: none;
    transition: all ease-out 0.2s;
    text-transform: capitalize;
    ::placeholder {
      color: #c5cae9;
      font-size: 16px;
      font-weight: 300;
    }
    @media screen and (min-width: 1024px) {
      width: 442px;
      height: 38px;
      font-size: 24px;
    }
  `;

export type HeaderInput = HTMLInputElement;

type HeaderProps = {
  addTask: KeyboardEventHandler<HeaderInput>;
  handleInput: ChangeEventHandler<HeaderInput>;
  inputValue: string;
};

export const Header = ({ addTask, handleInput, inputValue }: HeaderProps) => {
  return (
    <AppHeader>
      <Input
        type="text"
        placeholder="add task"
        onChange={handleInput}
        onKeyPress={addTask}
        value={inputValue}
      />
    </AppHeader>
  );
};
