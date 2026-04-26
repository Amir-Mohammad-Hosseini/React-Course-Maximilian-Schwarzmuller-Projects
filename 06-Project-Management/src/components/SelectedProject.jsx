import React, { useRef, useState } from "react";
import Input from "./Input";
import Modal from "./Modal";

const SelectedProject = ({
  id,
  title,
  description,
  dueDate,
  tasks,
  onDeleteProject,
  onAddTask,
  onRemoveTask,
}) => {
  const modalRef = useRef();

  const [projectTaskInput, setProjectTaskInput] = useState("");

  const formattedDate = new Date(dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const handleAddTask = () => {
    if (projectTaskInput.trim() === "") {
      modalRef.current.open();
      return;
    }
    onAddTask(id, projectTaskInput);
    setProjectTaskInput("");
  };
  return (
    <>
      <Modal ref={modalRef} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid value</h2>
        <p className="text-stone-500 mb-4">
          Oops...looks like you forgot to enter a value.
        </p>
        <p className="text-stone-500 mb-4">
          Please make sure you provide a valid value for input field.
        </p>
      </Modal>
      <main className="flex flex-col w-8/12 mt-16">
        <div className="border-b-2 border-stone-300 py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold text-stone-700">{title}</h2>
            <button
              className="text-stone-700"
              onClick={() => onDeleteProject(id)}
            >
              Delete
            </button>
          </div>
          <span className="block text-stone-400 mt-2 mb-4">
            {formattedDate}
          </span>
          <p className="text-stone-700 whitespace-pre-wrap">{description}</p>
        </div>
        <div className="mt-4">
          <h2 className="text-3xl font-bold text-stone-700">Tasks</h2>
          <div className="flex gap-4">
            <Input
              value={projectTaskInput}
              onChange={(event) => setProjectTaskInput(event.target.value)}
            />
            <button className="text-stone-700" onClick={handleAddTask}>
              Add Task
            </button>
          </div>
          {tasks.length === 0 && (
            <p className="text-stone-800 bg-stone-200 h-32 mt-4 flex justify-center items-center rounded-lg">
              This project does not have any tasks yet.
            </p>
          )}
          {tasks.length !== 0 && (
            <ul className="mt-8 space-y-2">
              {tasks.map((task) => (
                <li
                  key={task.id}
                  className="flex justify-between items-center py-8 px-4 w-full bg-stone-100 rounded-md"
                >
                  <p className="text-stone-800">{task.name}</p>
                  <button
                    onClick={() => onRemoveTask(task.id, id)}
                    className="text-stone-700 hover:text-red-500"
                  >
                    Clear
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </>
  );
};

export default SelectedProject;
