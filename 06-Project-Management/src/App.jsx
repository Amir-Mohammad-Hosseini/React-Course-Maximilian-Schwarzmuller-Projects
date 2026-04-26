import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectDatas: undefined,
    projects: [],
  });

  const handleShowProjectForm = () => {
    setProjectsState({ ...projectsState, selectedProjectDatas: null });
  };
  const handleHideProjectForm = () => {
    setProjectsState({ ...projectsState, selectedProjectDatas: undefined });
  };
  const handleAddProject = (projectDatas) => {
    setProjectsState({
      ...projectsState,
      projects: [
        ...projectsState.projects,
        { id: projectsState.projects.length + 1, ...projectDatas, tasks: [] },
      ],
    });
  };
  const handleClickDeleteProject = (projectID) => {
    setProjectsState({
      selectedProjectDatas: undefined,
      projects: [...projectsState.projects].filter(
        (project) => project.id !== projectID,
      ),
    });
  };
const handleClickAddTask = (projectID, taskName) => {
  setProjectsState((prevState) => {
    const updatedProjects = prevState.projects.map((project) => {
      if (project.id === +projectID) {
        const newTask = { id: project.tasks.length + 1, name: taskName };
        return { ...project, tasks: [...project.tasks, newTask] };
      }
      return project;
    });

    let updatedSelectedProject = prevState.selectedProjectDatas;
    if (updatedSelectedProject && updatedSelectedProject.id === +projectID) {
      updatedSelectedProject = updatedProjects.find(p => p.id === +projectID);
    }

    return {
      ...prevState,
      projects: updatedProjects,
      selectedProjectDatas: updatedSelectedProject,
    };
  });
};

const handleClickRemoveTask = (taskID, projectID) => {
  setProjectsState((prevState) => {
    const updatedProjects = prevState.projects.map((project) => {
      if (project.id === projectID) {
        return {
          ...project,
          tasks: project.tasks.filter((task) => task.id !== taskID),
        };
      }
      return project;
    });

    let updatedSelectedProject = prevState.selectedProjectDatas;
    if (updatedSelectedProject && updatedSelectedProject.id === projectID) {
      updatedSelectedProject = updatedProjects.find(p => p.id === projectID);
    }

    return {
      ...prevState,
      projects: updatedProjects,
      selectedProjectDatas: updatedSelectedProject,
    };
  });
};
  let content;
  if (projectsState.selectedProjectDatas === undefined) {
    content = <NoProjectSelected onShowForm={handleShowProjectForm} />;
  } else if (projectsState.selectedProjectDatas === null) {
    content = (
      <NewProject
        onHideForm={handleHideProjectForm}
        onAddProject={handleAddProject}
      />
    );
  } else {
    content = (
      <SelectedProject
        {...projectsState.selectedProjectDatas}
        onDeleteProject={handleClickDeleteProject}
        onAddTask={handleClickAddTask}
        onRemoveTask={handleClickRemoveTask}
      />
    );
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        projects={projectsState.projects}
        sFelectedProject={projectsState.selectedProjectDatas}
        onShowForm={handleShowProjectForm}
        onSelectProject={(projectDatas) => {
          setProjectsState({
            ...projectsState,
            selectedProjectDatas: projectDatas,
          });
        }}
      />
      {content}
    </main>
  );
}

export default App;
