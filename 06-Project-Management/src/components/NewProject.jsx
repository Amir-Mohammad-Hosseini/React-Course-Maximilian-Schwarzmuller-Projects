import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const NewProject = ({ onHideForm, onAddProject }) => {
  const modalRef = useRef();

  const titleRef = useRef();
  const descriptionRef = useRef();
  const duedateRef = useRef();

  const handleClickSaveProjectsForm = () => {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = duedateRef.current.value;
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modalRef.current.open();
      return;
    }
    const newProjectDatas = {
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    };
    onAddProject(newProjectDatas);
    titleRef.current.value = "";
    descriptionRef.current.value = "";
    duedateRef.current.value = "";
  };
  return (
    <>
      <Modal ref={modalRef} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid value</h2>
        <p className="text-stone-500 mb-4">Oops...looks like you forgot to enter a value.</p>
        <p className="text-stone-500 mb-4">Please make sure you provide a valid value for every input field.</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={() => onHideForm()}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleClickSaveProjectsForm}
              className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input
            type="text"
            ref={titleRef}
            label="Title"
            name="titleInput"
            id="titleInput"
          />
          <Input
            ref={descriptionRef}
            label="Description"
            isTextarea={true}
            name="descriptionInput"
            id="descriptionInput"
          />
          <Input
            type="date"
            ref={duedateRef}
            label="Due Date"
            name="dueDateInput"
            id="dueDateInput"
          />
        </div>
      </div>
    </>
  );
};

export default NewProject;
