
const app = document.getElementById('app');
const project = [];

const addTaskButton = document.getElementById('addTask');
addTaskButton.addEventListener('click', displayTaskForm) 

//set so form is hidden till clicked 
const taskForm = document.getElementById('taskForm');
taskForm.style.display = 'none';


const addButton = document.getElementById('taskDoneButton');
addButton.addEventListener('click', addTaskToProject);
//complete, name, priority, date, always want complete to be set to false automatically, id = project.length

const taskFactory = (taskName, priority, date) => {
    completedStatus = false;
    id = project.length;
    return{completedStatus, taskName, priority, date, id}
}


//display task form
function displayTaskForm() {
    taskForm.style.display = 'block';
}


//when you click add button it adds the task to the Project Array and uses the values in the task Factory.
function addTaskToProject() {
    event.preventDefault();
    let task = taskFactory(taskName.value, priority.value, date.value)
    project.push(task);
    taskForm.reset();
    taskForm.style.display = 'none';
    console.log(project)
}

//actual render function will have a delete button on it and an edit button on it

//need to figure out  date
// function loadTaskForm() {
//     const tasksForm = document.createElement('form');

//     const nameInput = document.createElement('input');
//     nameInput.setAttribute('id', 'taskName');
//     nameInput.setAttribute('placeholder', 'Task Name')
//     tasksForm.appendChild(nameInput);

//     const priority = document.createElement('select');
//     priority.setAttribute('id', 'priority')

//     const highPriority = document.createElement('option');
//     highPriority.setAttribute('value', 'High');
//     highPriority.textContent = 'High';
//     priority.appendChild(highPriority);

//     const medPriority = document.createElement('option');
//     medPriority.setAttribute('value', 'Medium');
//     medPriority.textContent = 'Medium';
//     priority.appendChild(medPriority);

//     const lowPriority = document.createElement('option');
//     lowPriority.setAttribute('value', 'Low');
//     lowPriority.textContent = 'Low';
//     priority.appendChild(lowPriority);
//     tasksForm.appendChild(priority);

//     const addButton = document.createElement('button');
//     addButton.textContent = 'Add';
//     addButton.addEventListener('click', addTaskToProject)

//     tasksForm.appendChild(addButton);

//     app.append(tasksForm)
// }
