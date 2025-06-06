
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
    const todoDescription = document.createElement('p');
    todoDescription.className = "todo-description";
    todoDescription.innerText = todo.comment;

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
    const button = document.createElement('button');
    button.className = "add-todo";
    button.innerText = 'Add';
    contentHeader.append(h1, button);
    const body = document.getElementById("todo-list");
    body.innerHTML = "";
    project.list.forEach(element => {
        todoDom(element);
    });
}

export default displayTodos;

/*

<div class="content-header">
            <h1>Project 1</h1>
            <button class="add-todo">add</button>
        </div>
*/