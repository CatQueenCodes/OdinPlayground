
const app = document.getElementById('app');
const buttonContainer = document.getElementById('buttonArea')

//class that creates a button
class ButtonItem {
  constructor(changeTextCallback){
    this.changeTextCallback = changeTextCallback;
  }

  createButton(callback){
    let button = document.createElement('button');
    button.textContent = "click me to change text";
    button.addEventListener('click', callback);

    return button 
  }

  render(area){
    const btn = this.createButton(this.changeTextCallback);  //don't need .bind(this) because it is not being called here. only need it at time of binding 
    area.appendChild(btn);
  }
}


//should add button to the screen and make changeText the function used f
class WorkingButton {
  constructor(text, renderArea) {
    this.text = text
    this.area = renderArea;
  }

  changeText(text){
    app.textContent = this.text;
  }

  displayButton() {
    const button = new ButtonItem(this.changeText.bind(this));
    button.render(this.area)
  }
}

//creates a button that changes the box text to say "hi" when clicked
let button1 = new WorkingButton("HI", buttonContainer);
button1.displayButton();

let button2 = new WorkingButton("BYE", buttonContainer);
button2.displayButton();

