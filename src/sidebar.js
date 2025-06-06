import Project from "./projects";
import projectManager from "./projects";
import displayTodos from "./todoDom";



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
    console.log(projectManager.projects)
    const projectsDiv = document.getElementById("projects")
    projectsDiv.innerHTML = "";
    projectManager.projects.forEach(element => {
        const div = document.createElement('div');
        const button = document.createElement('button');
        button.innerText = "x";
        button.className = "remove-project-button";
        div.className = "project";
        div.innerText = element.name;
        button.addEventListener('dblclick', ()=> {
            projectManager.removeProject(projectManager.projects.findIndex(project => project.name === element.name));
            displayProjects();
            displayTodos(projectManager.projects[0]);
        })

        div.addEventListener('click', ()=> {
            displayTodos(element);
        })
        
        div.append(button);
        projectsDiv.append(div);
    });
}

function projectModal() {
    const exitProjectModal = document.getElementById('close-projects-modal');
    exitProjectModal.addEventListener('click', ()=> {
        closeProjectModal();
    });

    const form = document.getElementById('projects-form');
    const addProjectButton = document.getElementById('projects-modal-add');
    const title = document.getElementById('project-modal-title');
    form.addEventListener('submit', (e)=> {
        e.preventDefault();
        const projectsDiv = document.getElementById("projects");
        projectManager.addProject(title.value)
        closeProjectModal();
        
        displayProjects();

        title.value = null;
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