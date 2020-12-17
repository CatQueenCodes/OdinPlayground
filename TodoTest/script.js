const projectContainer = document.getElementById('projects'); //holds newly created projects (project title)
const taskContainer = document.getElementById('taskHeadContainer'); //hold add task button
const projectInfo = document.getElementById('projectInfoContainer'); //hold delete button


class ProjectItem {

    constructor (){

    }

    //return a div with the project to be added to the projectContainer when rendered 
    //return a div with the delete button to be added to projectInfoContainer when rendered
    //return a div with the add Task button to be added to the taskHeadContainer when rendered 

    createProject(loadProjectCallback, deleteCallback,addTaskCallback){
        const projectContainer = document.getElementById('projects'); //holds newly created projects (project title)
        const taskContainer = document.getElementById('taskHeadContainer'); //hold add task button
        const projectInfo = document.getElementById('projectInfoContainer'); //hold delete button 
        

        const projectName = document.createElement('div');  
        const deleteButton = document.createElement('div');
        const taskButton = document.createElement('div');

        const projectElements = [
            {
                element: 'div',
                class: 'project',
                callback: () => {loadProjectCallback()},
                textContent: 'ProjectName',
                parentDiv: projectName, 
            },
            {
                element: 'Button',
                class: 'deleteProjectButton',
                callback: () => {deleteCallback()},
                textContent: 'Delete Project',
                parentDiv: deleteButton,
            },
            {
                element: 'Button',
                class: 'addTaskButton',
                callback: () => {addTaskCallback()},
                textContent: '+ Task',
                parentDiv: taskButton,  
            },
        ]
        projectElements.forEach(item => createProjectElement(item));  //want to create the element not append it to the parent until it is rendered
        
        return projectName, deleteButton, taskButton;

        // projectContainer.appendChild(projectName);
        // taskContainer.appendChild(taskButton);
        // projectInfo.append(taskButton);

    }

}


function createProjectElement(obj) {
    const el = document.createElement(obj.element); ;
    el.className = obj.class;
    el.textContent = obj.textContent; 
    if (obj['callback']) el.addEventListener('click', obj.callback);
    obj.parentDiv.appendChild(el); 
}



let project1 = new ProjectItem();
project1.createProject('a','b','c');


// let project2 = new ProjectItem();
// project2.createProject('a','b','c');