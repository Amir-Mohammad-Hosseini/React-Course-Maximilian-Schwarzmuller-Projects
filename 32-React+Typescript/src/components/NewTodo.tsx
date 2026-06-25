import { useContext, useRef, type FC, type SubmitEvent } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../context/todos-context";

const NewTodo: FC = () => {
  const { addTodo } = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: SubmitEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current?.value;

    if (enteredText?.trim().length === 0 || !enteredText) {
      //throw an error
      return;
    }

    addTodo(enteredText);
    todoTextInputRef.current!.value = "" // '!' means I am sure that current is not equal null here 
  };
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <label htmlFor="new-todo">Todo Text</label>
      <input type="text" name="new-todo" id="new-todo" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
