import "./styles.css";
import sidebarDom from "./sidebar";
import displayTodos from "./todoDom";
import projectManager from "./projects";


sidebarDom();

displayTodos(projectManager.projects[0]);