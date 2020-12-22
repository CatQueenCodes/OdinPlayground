//only initiated used ONCE, that has an array that holds ALL the projects
class AllProjects {

    constructor() {
        this.allProjects = [];
    }
}

//hold and control my tasks items, add AllProjects[]
class Project {

    constructor(){
        this.project = [];
    }

    // createTask(text){
    //    let task = new TaskItem(text);
    //    return task
    // }

    addTaskToProject(text) {
        this.project.push(new TaskItem(text))
    }

    addProjectToAllProjects(){
        allProjectArray.allProjects.push(this.project)
    }
}

//creates project Item
class ProjectItem {

    constructor(){
        this.project ="PROJECT";
    }
}

//creates Task Item 
class TaskItem {
    constructor(text){
        this.text = text;
    }
}


//NEED TO FIGURE OUT WHERE ProjectItem Class comes into play, when I want to actually render the stuff? 

const allProjectArray = new AllProjects();
const project1 = new Project();  //has array to hold all my tasks
project1.addTaskToProject('This is TASK 1');    //adds a task to the project
project1.addTaskToProject('This is TASK 2')     //adds another task to the project
project1.addProjectToAllProjects();  //pushed the project to the array that will hold all projects

console.log(project1);
console.log("Task 1:", project1.project[0]);
console.log("Task 2:",project1.project[1]);
console.log(allProjectArray);
