import "./styles.css";
import sidebarDom from "./sidebar";
import displayTodos from "./todoDom";
import projectManager from "./projects";
import { todoModal } from "./todoDom";

projectManager.projects[0].isActive = true;
displayTodos(projectManager.projects[0]);

sidebarDom();

todoModal();