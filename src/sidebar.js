class Project {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.list = [];
    }
}
const projects = [];
projects.push(new Project("project 1", 8));
projects.push(new Project("projct 2", 4))




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

    

    addProjectButton.addEventListener('click', ()=> {
        console.log("yes");
        const modal = document.getElementById("projects-modal");
        modal.showModal();
        modal.className = "active";
    });
    
    sidebar.append(addProjectButton, projectsTitle, projectsDiv);
    displayProjects();
    projectModal();
}

function displayProjects() {
    const projectsDiv = document.getElementById("projects")
    projects.forEach(element => {
        const div = document.createElement('div');
        div.className = "project";
        div.innerText = element.name;
        projectsDiv.append(div);
    });
}

function projectModal() {
    const exitProjectModal = document.getElementById('close-projects-modal');
    exitProjectModal.addEventListener('click', ()=> {
        closeProjectModal();
    });

    const addProjectButton = document.getElementById('projects-modal-add');
    const title = document.getElementById('project-modal-title');
    addProjectButton.addEventListener('click', (e)=> {
        e.preventDefault();
        const projectsDiv = document.getElementById("projects");
        projects.push(new Project(title.value, 3));
        console.log(projects);
        closeProjectModal();
        
        const div = document.createElement('div');
        div.className = "project";
        div.innerText = title.value;
        projectsDiv.append(div);

        title.value = "";
    })

}
function closeProjectModal() {
    const modal = document.getElementById("projects-modal");
    modal.close();
    modal.className = ""

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