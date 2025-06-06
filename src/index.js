import "./styles.css";
import sidebarDom from "./sidebar";
import displayTodos from "./todoDom";
import projectManager from "./projects";
import { todoModal } from "./todoDom";


displayTodos(projectManager.projects[0]);
projectManager.projects[0].isActive = true;
sidebarDom();

todoModal();