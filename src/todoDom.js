import Todo from "./projects.js"
import Project from "./projects.js"
import projectManager from "./projects.js";
function todoDom(todo) {

    const body = document.getElementById('todo-list');
    
    const uuid = crypto.randomUUID();
    const todoDiv = document.createElement('div');
    todoDiv.className = "todo";
    const todoOverview = document.createElement('div');
    todoOverview.className = "todo-overview"
    const input = document.createElement('input');
    input.type = "checkbox";
    input.name = uuid;
    input.id = uuid;
    const label = document.createElement('label');
    label.htmlFor = uuid;
    const todoTitle = document.createElement('div');
    todoTitle.className = "todo-title";
    todoTitle.innerText = todo.title;
    const todoDate = document.createElement('div');
    todoDate.className = "todo-date";
    todoDate.innerText = todo.date;
    const todoDropdown = document.createElement('button');
    todoDropdown.className = "todo-dropdown";
    todoDropdown.innerText = "\\//";

    const todoAll = document.createElement('todo-all');
    todoAll.className = "todo-all";
    todoAll.classList.add("hidden");
    const todoDescription = document.createElement('p');
    todoDescription.className = "todo-description";
    todoDescription.innerText = todo.comment;
    todoDropdown.addEventListener('click', ()=> {
        if (todoAll.classList.contains("hidden")) {
            todoAll.classList.remove("hidden");
        }
        else {
            todoAll.classList.add("hidden")
        }
        
    })
    input.addEventListener('change', ()=> {
        setTimeout(() => {
        const projectIndex = projectManager.projects.findIndex(project => project.isActive === true);
        const todoIndex = projectManager.projects[projectIndex].list.findIndex(todos => todos.title === todo.title)
        projectManager.projects[projectIndex].removeTodo(todoIndex);
        displayTodos(projectManager.projects[projectIndex]);
        }, 1000);
        
    })

    label.append(todoTitle);
    todoOverview.append(input, label, todoDate, todoDropdown);
    todoAll.append(todoDescription);

    todoDiv.append(todoOverview, todoAll);
    body.append(todoDiv);
}

function displayTodos(project) {
    const contentHeader = document.getElementById('content-header');
    contentHeader.innerHTML = ""
    const h1 = document.createElement('h1');
    h1.innerText = project.name;
    h1.id = "project-h1";
    const button = document.createElement('button');
    button.className = "add-todo";
    button.innerText = 'Add';
    button.addEventListener('click', ()=> {
        showTodoModal(project);
    })
    contentHeader.append(h1, button);
    const body = document.getElementById("todo-list");
    body.innerHTML = "";
    project.list.forEach(element => {
        todoDom(element);
    });
    
}

function showTodoModal() {
    const modal = document.getElementById('todo-modal');
    modal.classList.add('active');
    modal.showModal();
}

export function todoModal() {
    const exitButton = document.getElementById('close-todo-modal');

    const modal = document.getElementById('todo-modal');
    const title = document.getElementById('todo-modal-title');
    const comments = document.getElementById('todo-modal-comments')
    exitButton.addEventListener('click', ()=> {
        modal.close();
        title.value = null;
        comments.value = null;
        modal.classList.remove("active");
    })
    modal.addEventListener('submit', (e)=> {
        e.preventDefault();
        
        const index = projectManager.projects.findIndex(projects => projects.isActive === true)
        console.log(index);
        addTodo(index, title.value, "date", comments.value)
        
        title.value = null;
        comments.value = null;
        console.log(index)
        modal.close();
        modal.classList.remove("active");
        
    })
}
function addTodo(index, title, date, comments) {
    projectManager.addTodo(index, title, "2", comments);
    displayTodos(projectManager.projects[index])
}
export default displayTodos

/*

<div class="content-header">
            <h1>Project 1</h1>
            <button class="add-todo">add</button>
        </div>
*/