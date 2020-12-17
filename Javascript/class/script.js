const app = document.querySelector("#app");

function createItemFragment(name, content, callback) {
    const itemText = document.createElement('p');
    itemText.innerText = name + ': ' + content;

    const deleteButton = document.createElement('button');
    deleteButton.innerText = "x"
    deleteButton.addEventListener('click', () => {
        callback();
    });

    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    wrapper.appendChild(itemText);
    wrapper.appendChild(deleteButton);

    return wrapper;
}

class ListItem {
    constructor(name, content, deleteCallback) {
        this.name = name;
        this.content = content;
        this.deleteCallback = deleteCallback;
    }

    render(element) {
        const itemFragment = createItemFragment(this.name, this.content, this.deleteCallback);
        element.appendChild(itemFragment)
    }
}

class List {
    constructor(renderArea) {
        this.renderArea = renderArea;
        this.items = [];
    }

    showItems() {
        this.renderArea.innerHTML = "";
        this.items.forEach(item => {
            item.render(this.renderArea);
        });
    }

    addItem(name, content) {
        const itemIndex = this.items.length; // Length is the "true" length, but since it indexes at 0, we do not need to add '1' to get the position of the next index;
        this.items.push(new ListItem(name, content, () => {
            this.deleteItem(itemIndex)
        })); 

        this.showItems();
    }

    deleteItem(itemIndex) {
        this.items = this.items.filter((item, index) => index !== itemIndex);
        this.showItems();
    }
}

const groceryList = new List(app);
groceryList.addItem("Milk", "1 1/2 gallon");
groceryList.addItem("Fish", "1 package frozen");
groceryList.addItem("Eggs", "1 dozen");