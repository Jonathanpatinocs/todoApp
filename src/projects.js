
class ProjectManager {
    constructor() {
        this.projects = [];
    }

    addProject(project) {
        this.projects.push(new Project(project));
    }

    removeProject(index) {
        this.projects.splice(index, 1);
    }
    
    getAllProjects() {
        return this.projects;
    }
    addTodo(index, title, date, comments) {
        this.projects[index].addTodo(new Todo(title, date, comments))
    }
}

export class Project {
    constructor(name) {
        this.name = name;
        this.list = [];
        this.isActive = false;
    }
    addTodo(todo) {
        this.list.push(todo);
    }
    
}

export class Todo {
    constructor(title, date, comment) {
        this.title = title;
        this.date = date;
        this.comment = comment;
    }
}


const projectManager = new ProjectManager();
projectManager.addProject(("Project 1"));
projectManager.addProject(("project 2"));


projectManager.projects[0].addTodo(new Todo("title1", "date1", "comments1"));
projectManager.projects[0].addTodo(new Todo("title2", "date2", "comments2"));
projectManager.projects[0].addTodo(new Todo("title3", "date3", "comments3"));
/* projectManager.removeProject(projectManager.projects.findIndex(project => project.name === "Project 1")); */

export default (projectManager);
