import React from "react";
import Button from "./Button";

const ProjectsSidebar = ({ projects,selectedProject, onShowForm, onSelectProject }) => {
  return (
    <aside className="w-1/3 h-full px-8 py-16 bg-stone-900 text-stone-50 rounded-r-xl md:w-72">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-slate-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={() => onShowForm()}>+ Add Project</Button>
      </div>
      <ul className="mt-8 space-y-2">
        {projects.map((project) => {
          let cssClasses = "py-1 px-2 rounded-sm text-stone-400 hover:bg-stone-800 hover:text-stone-200 transition"
          if(project.id ===selectedProject?.id){
            cssClasses += " bg-stone-800 text-stone-200"
          }
          return (
          <li
            className={cssClasses}
            key={project.id}
            onClick={() => {}}
          >
            <button
              className="w-full h-full flex justify-start"
              onClick={() => onSelectProject(project)}
            >
              {project.title}
            </button>
          </li>
        )
        })}
      </ul>
    </aside>
  );
};

export default ProjectsSidebar;
