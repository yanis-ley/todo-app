
const formElement = document.getElementById('form')
formElement.addEventListener('submit', e => {
    //create a todo item div
    const todoDiv = document.createElement('div')
    //delete element
    const deleteElement = document.createElement('button')
    deleteElement.textContent = 'Done';
    // list element
    const todoElement = document.createElement('li');
    todoElement.textContent = document.getElementById('taskInput').value;
    document.getElementById('taskInput').value = '';
    // styling the todo Element
    todoDiv.appendChild(todoElement);
    todoDiv.appendChild(deleteElement)
    todoElement.style.marginTop = '15px';
    todoElement.style.marginLeft = '10px'
    todoDiv.style.display = 'flex'
    todoDiv.style.justifyContent = 'space-between'
    todoDiv.style.textAlign = 'left';
    todoDiv.style.width = '450px';
    todoDiv.style.height = '70px';
    todoDiv.style.borderRadius = '10px' 
    todoDiv.style.fontSize = '30px';
    todoDiv.style.marginLeft = '544px';
    todoDiv.style.marginTop = '20px';
    todoDiv.style.backgroundColor = '#e9e9e9';
    deleteElement.style.marginRight = '10px';
    // show on screen
    const todoListItem = document.getElementById('todo-list');
    todoListItem.appendChild(todoDiv);
    //done button technologie
    deleteElement.addEventListener('click', e => {
        todoDiv.remove();
    })
    e.preventDefault();
    const ergebnis = deleteElement.type
    console.log(ergebnis);
});