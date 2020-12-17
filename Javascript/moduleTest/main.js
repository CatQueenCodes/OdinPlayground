
// add head, pic, button container, content container

const renderMainPage = () => {
    const container = document.getElementById('content');
    const btnContainer = document.createElement('div');

    function addH1(){
        const head = document.createElement('h1');
        head.textContent = "Cat Queen's Cafe";
        container.appendChild(head);
    }
    function addPhoto() {
        const photo = document.createElement('img');
        photo.src = './cat.jpg';
        container.appendChild(photo);
    }
    function addButtonContainer() {
        
        btnContainer.setAttribute('id', 'btnContainer')
        btnContainer.textContent='button container';
        container.appendChild(btnContainer);
    }
    function addContentContainer() {
        const contentContainer = document.createElement('div');
        contentContainer.setAttribute('id', 'contContainer')
        contentContainer.textContent = "SAMPLE CONTENT";
        container.appendChild(contentContainer);
    }

    function addAboutButton() {
        const aboutButton = document.createElement('button');
        aboutButton.classList.add('button');
        aboutButton.textContent = 'About';
        btnContainer.appendChild(aboutButton);
    }
    function addMenuButton() {
        const menuButton = document.createElement('button');
        menuButton.classList.add('button');
        menuButton.textContent = 'Menu';
        btnContainer.appendChild(menuButton);
    }
    function addContactButton(){
        const contactButton = document.createElement('button');
        contactButton.classList.add('button');
        contactButton.textContent = 'Contact';
        btnContainer.appendChild(contactButton);
    }
    addH1(); addPhoto(); addButtonContainer(); addContentContainer();
    addAboutButton(); addContactButton(); addMenuButton();
};

renderMainPage();

function loadAbout() {
    const contentContainer = document.querySelector('#contContainer'); 
    contentContainer.textContent = 'load about function';
    console.log('About.js is linked');
}

loadAbout();



/*
//creates 3 buttons
const createButtons = () => {
    const btnContainer = document.querySelector('#btn-container')
    function addAboutButton() {
        const aboutButton = document.createElement('button');
        aboutButton.textContent = 'About';
        btnContainer.appendChild(aboutButton);
    }
    function addMenuButton() {
        const menuButton = document.createElement('button');
        menuButton.textContent = 'Menu';
        btnContainer.appendChild(menuButton);
    }
    function addContactButton(){
        const contactButton = document.createElement('button');
        contactButton.textContent = 'Contact';
        btnContainer.appendChild(contactButton);
    }
    addAboutButton(); addContactButton(); addMenuButton();
};

function loadAbout() {
    const contentContainer = document.querySelector('#cont-contaier');
    contentContainer.textContent = 'TESTING THIS TEXT CONTENT';
    console.log('About.js is linked');
}


mainFeatures();
createButtons()
loadAbout();


/* OG Restraunt project info

const container = document.getElementById('content');

const mainFeatures = (() => {
    
    function addH1(){
        const head = document.createElement('h1');
        head.textContent = "Cat Queen's Cafe";
        container.appendChild(head);
    }
    function addPhoto() {
        const photo = document.createElement('img');
        
        container.appendChild(photo);
    }
    function addButtonContainer() {
        const btnContainer = document.createElement('div');
        btnContainer.classList.add('btn-container');
        btnContainer.textContent='button container';
        container.appendChild(btnContainer);

        return btnContainer
    }
    function addContentContainer() {
        const contentContainer = document.createElement('div');
        contentContainer.classList.add('cont-container')
        contentContainer.textContent = "SAMPLE CONTENT";
        container.appendChild(contentContainer);
    }
    return {addH1, addPhoto, addButtonContainer, addContentContainer, btnContainer}
})();



const buttons = (() => {
    function addAboutButton() {
        const aboutButton = document.createElement('button');
        aboutButton.textContent = 'About';
        btnContainer.appendChild(aboutButton);
    }
    function addMenuButton() {
        const menuButton = document.createElement('button');
        menuButton.textContent = 'Menu';
        btnContainer.appendChild(menuButton);
    }
    function addContactButton(){
        const contactButton = document.createElement('button');
        contactButton.textContent = 'Contact';
        btnContainer.appendChild(contactButton);
    }
    return {addAboutButton, addMenuButton, addContactButton}
})();

function addMainFeatures() {
    mainFeatures.addH1();
    mainFeatures.addPhoto();
    mainFeatures.addButtonContainer();
    mainFeatures.addContentContainer();

    buttons.addAboutButton();
    buttons.addContactButton();
    buttons.addMenuButton();
}
export {addMainFeatures}
*/