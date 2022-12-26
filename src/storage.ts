import { TaskItem } from './App'

const todosKey = 'todos' as const;
export const saveTodos = (todos:TaskItem[]) => localStorage.setItem(todosKey, JSON.stringify(todos))
export const getTodos = () => {
  const todos = localStorage.getItem(todosKey);
  return todos ? JSON.parse(todos) as TaskItem[] : []
}