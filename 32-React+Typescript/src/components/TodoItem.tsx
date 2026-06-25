import type { FC } from "react";

import classes from "./TodoItem.module.css";

const TodoItem: FC<{ id: string; text: string , onRemoveTodo : (todoId : string) => void }> = ({ id, text , onRemoveTodo }) => {

    const handleRemoveTodoClick = () => {
        onRemoveTodo(id)
    }
  return (
    <li className={classes.item} onClick={handleRemoveTodoClick}>
      {text} | Date :{" "}
      {new Date(id).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </li>
  );
};

export default TodoItem;
