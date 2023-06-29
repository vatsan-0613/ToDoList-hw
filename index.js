
const tickIcons = document.getElementsByClassName("icon"); 
const binIcons = document.getElementsByClassName("t-icon");
const addButton = document.getElementsByClassName("add-icon")[0];
const heading = document.querySelector('.todo h3');

var options = { day: 'numeric', month: 'long', year: 'numeric' };
var formattedDate = new Date().toLocaleDateString('en-US', options); 
heading.innerText = formattedDate;


const addTodo = (event)=>{
    const value = document.querySelector('input').value;
    if(value===''){
        alert("please enter an item to add!");
    } else{
    const addedItem = document.createElement('div');
    addedItem.className = "item";
    addedItem.innerHTML = `<p>${value}</p><div class="icon"><i class="fa-solid fa-arrow-right"></i></div>`; 
    addedItem.children[1].addEventListener('click', delItem);
    document.getElementsByClassName('todo')[0].appendChild(addedItem);
    document.querySelector('input').value = '';
    console.log(value);
    }
}



addButton.addEventListener('click', addTodo);


const addItem = (remItem)=>{
    const compItem = document.createElement('div');
    compItem.className = "item1";
    compItem.innerHTML = `<p>${remItem.firstElementChild.innerText}</p><div class="t-icon"><i class="fa-solid fa-trash-can"></i></div>`; 
    const completed = document.getElementsByClassName('completed')[0];
    completed.appendChild(compItem);
    compItem.children[1].addEventListener('click', delComp);

}

const delItem = (event)=>{
    const remItem = event.target.parentNode.parentNode;
    addItem(remItem);
    remItem.remove();
}

const delComp = (event)=>{
    event.target.parentNode.parentNode.remove();
    console.log(event.target.parentNode);
}

[...tickIcons].forEach((icon)=>{
    icon.addEventListener('click', delItem);
});

[...binIcons].forEach((icon)=>{
    icon.addEventListener('click', delComp);
});