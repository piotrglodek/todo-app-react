import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Header, HeaderInput } from "./Header";
import { Task } from "./Task";
import { Container, Grid } from "./styles";
import { getTodos, saveTodos } from "./storage";

export type TaskItem = {
  id: string;
  text: string;
};

export const App = () => {
  const [tasks, setTasks] = useState<TaskItem[]>(getTodos());
  const [value, setValue] = useState("");

  const handleInput = ({ target: { value } }: ChangeEvent<HeaderInput>) =>
    setValue(value);
  const addTask = (e: KeyboardEvent<HeaderInput>) => {
    if (e.key === "Enter" && value !== "") {
      setTasks((prevTasks) => [
        ...prevTasks,
        {
          id: uuidv4(),
          text: value,
        },
      ]);
      setValue("");
    }
  };
  const deleteTask = (taskId: TaskItem["id"]) =>
    setTasks((tasks) => tasks.filter(({ id }) => id !== taskId));

  useEffect(() => {
    saveTodos(tasks);
  }, [tasks]);

  return (
    <>
      <Header addTask={addTask} handleInput={handleInput} inputValue={value} />
      <Container>
        <Grid>
          {tasks.map(({ id, text }) => (
            <Task
              text={text}
              id={id}
              key={id}
              deleteTask={() => deleteTask(id)}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
};
