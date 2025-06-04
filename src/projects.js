
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
}

class Project {
    constructor(name) {
        this.name = name;
        this.list = [];
    }
    
}

const projectManager = new ProjectManager();
projectManager.addProject(("Project 1"));
projectManager.addProject(("project 2"));

/* projectManager.removeProject(projectManager.projects.findIndex(project => project.name === "Project 1")); */

export default (Project, projectManager);