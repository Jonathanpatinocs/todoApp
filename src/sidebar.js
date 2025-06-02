class Project {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.list = [];
    }
}
const projects = [];
projects.push(new Project("project 1", 8));


function sidebarDom() {
    const sidebar = document.getElementById('sidebar');
    const addProjectButton = document.createElement('button');
    addProjectButton.id = "add-project"
    addProjectButton.innerText = "Add"
    const projectsTitle = document.createElement('div');
    projectsTitle.id = "projects-title";
    projectsTitle.innerText = "Projects"
    const projectsDiv = document.createElement('div');
    projectsDiv.id = "projects";

    projects.forEach(element => {
        const div = document.createElement('div');
        div.className = "project";
        div.innerText = element.name;
        projectsDiv.append(div);
    });

    addProjectButton.addEventListener('click', ()=> {
        addProject()
    })
    sidebar.append(addProjectButton, projectsTitle, projectsDiv)
}
function addProject() {

}


export default(sidebarDom);
/*
<div id="sidebar">
        <button id="add-project">add</button>
        <div id="projects-title">Projects</div>
        <div id="projects">
            <div class="project">project 1</div>
            <div class="project">project 2</div>
            <div class="project">project 3</div>
        </div>
    </div>
*/