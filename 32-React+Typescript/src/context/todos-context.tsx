import { createContext, useState, type FC, type ReactNode } from "react";
import Todo from "../models/todo";

type TodosContextProviderProps = {
  children: ReactNode;
};

type TodosContextObject = {
  items: Todo[];
  addTodo: (todoText: string) => void;
  removeTodo: (todoId: string) => void;
};

export const TodosContext = createContext<TodosContextObject>({
  items: [],
  addTodo: (todoText: string) => {},
  removeTodo: (todoId: string) => {},
});

const TodosContextProvider = ({ children }: TodosContextProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (todoText: string) => {
    const newTodo = {
      id: new Date().toISOString(),
      text: todoText,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };
  const handleRemoveTodo = (todoId: string) => {
    setTodos((prevTodos) => {
      const unRemovedTodos = [...prevTodos].filter(
        (todo) => todo.id !== todoId,
      );
      return unRemovedTodos;
    });
  };

  const ctxValue: TodosContextObject = {
    items: todos,
    addTodo: handleAddTodo,
    removeTodo: handleRemoveTodo,
  };

  return (
    <TodosContext.Provider value={ctxValue}>{children}</TodosContext.Provider>
  );
};

export default TodosContextProvider;
