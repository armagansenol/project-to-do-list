import "./main.scss"
const projects = [];

//selectors
let addProjectBtn = document.querySelector('#addProjectBtn');
let deleteProjectBtn = document.getElementsByClassName('delete-project');
const projectCard = document.querySelector('.projectCard');

const todoList = document.querySelector('.todo-list');
const todo = document.querySelector('.todo');
const deleteTodo = document.querySelector('#deleteTodo');
const completeTodo = document.querySelector('#completeTodo');
const addTodo = document.querySelector('#addTodoBtn');

const projectCards = document.querySelector('.project-cards');

//sidebar events
function addProject(project) {
    const projectCard = document.createElement('div');
    projectCard.classList = 'project-card card d-flex';
    projectCard.innerHTML = `<div class="card-body align-items-center d-flex">
                                <h5 class="card-title m-0">${project.title}<span>${project.date}</span></h5>
                                <button type="button" class="delete-project btn ml-auto">
                                <i class="fas fa-trash"></i>
                                </button>
                            </div>`;
    projectCards.appendChild(projectCard);
}

projectCards.addEventListener('click', function (e) {
    if (e.target && e.target.classList[0] === 'delete-project') {
        e.target.parentElement.parentElement.remove();
        clearTodos();
    } else if (e.target && e.target.classList[0] === 'project-card') {
        clearTodos();
    }
});

function clearTodos() {
    while (todoList.firstChild) {
        todoList.removeChild(todoList.lastChild);
    }
}

const modalProject = document.querySelector('#modalAddProject');
modalProject.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('btn')) {
        projectGenerator();
    }
});


function projectGenerator() {

    const Project = (title) => {
        const today = new Date();
        const date = today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear();

        const todos = [];

        return {
            title,
            date,
            todos
        };
    }

    
    let projectTitle = document.querySelector('#projectTitle');
    let project = Project(projectTitle.value);
    console.log(project);
    projects.push(project);
    console.log(projects);
    saveLocalProjects(projects);
}

function saveLocalProjects(projects) {
    if (localStorage.getItem("projects") === null) {
        localStorage.setItem("projects", JSON.stringify(projects));
    } else {
        localStorage.getItem("projects", JSON.parse(projects));
        localStorage.setItem("projects", JSON.stringify(projects));
    }
};

/*projectCard.addEventListener('click', getProjects);

function getProjects() {
    let projects;
    if (localStorage.getItem("projects") === null) {
        projects = [];
    } else {
        projects = JSON.parse(localStorage.getItem("projects"))
    }
    projects.forEach(addProject(project));
}*/





const todoGenerator = () => {

    const Todo = (title, description, status) => {
        const today = new Date();
        const date = today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear();

        return {
            title,
            date,
            description,
            status
        };
    }

    let todo = Todo('lol', '222', 'momomo', 'completed');
}


const todo1HTML = `
                    <div class="card-header">
                        <div class="card-header-inner" href="#collapse3" data-toggle="collapse"
                            data-parent="#accordion">
                            <i class="fas fa-heart heart"></i>
                            <h4>${todo.title}<span>${todo.date}</span></h4>
                            <div class="todo-buttons">
                                <button type="button" class="complete-todo btn">
                                    <i class="fas fa-check"></i>
                                </button>
                                <button type="button" class="delete-todo btn">
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div id="collapse3" class="collapse">
                        <div class="card-body">
                            ${todo.description}
                        </div>
                    </div>
                `;

const todoWrapper = document.createElement('div');
todo.classList = `todo card ${todo.status}`;