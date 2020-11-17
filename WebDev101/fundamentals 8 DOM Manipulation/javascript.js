const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// 1. a <p> with red text that says “Hey I’m red!”
const para = document.createElement("p");
para.textContent = "Hey I'm red!";
para.style.color = 'red';

container.appendChild(para);

// 2. an <h3> with blue text that says “I’m a blue h3!”
const head3 = document.createElement("h3");
head3.textContent = "I'm a blue h3!";
head3.style.color = "blue";

container.appendChild(head3);

// 3. a <div> with a black border and pink background color with the following elements inside of it:
    
const div = document.createElement("div");
div.setAttribute('style', 'border-style: solid; background: pink');
container.appendChild(div);

    // another <h1> that says “I’m in a div”
const head1 = document.createElement("h1");
head1.textContent = "I'm in a div";
div.appendChild(head1);
    // a <p> that says “ME TOO!”
const divpara = document.createElement("p");
divpara.textContent = "ME TOO!";
div.appendChild(divpara);