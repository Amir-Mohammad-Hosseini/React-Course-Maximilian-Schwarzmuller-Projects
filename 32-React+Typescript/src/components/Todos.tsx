import { useContext, type FC } from "react";
import TodoItem from "./TodoItem";

import classes from "./Todos.module.css";
import { TodosContext } from "../context/todos-context";

const Todos: FC = () => {
  const { items, removeTodo } = useContext(TodosContext);

  const handleRemoveTodo = (todoId: string) => {
    removeTodo(todoId);
  };

  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <TodoItem key={item.id} {...item} onRemoveTodo={handleRemoveTodo} />
      ))}
    </ul>
  );
};

export default Todos;
