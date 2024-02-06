let todoList = [
  {item : 'buys', dueDate: '4/10/2023'},
  {item : 'bu', dueDate: '4/10/2023'},
  {item : 'bs', dueDate: '4/10/2023'},
];

displayItems();
function addTodo(){
  let inputElement = document.getElementById('todo-input');
  let dateElement = document.getElementById('todo-date');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({item : todoItem, dueDate : todoDate});
  inputElement.value = '';
  dateElement.value = '';
  displayItems();
}

function displayItems(){
  let containerElement = document.querySelector('.todo-container') 

  let newHTML = '';

  for(let i in todoList){
    // let item = todoList[i].item;
    // let dueDate = todoList[i].dueDate;
    let {item, dueDate}= todoList[i];
    newHTML += `
      <span>${item}</span>
      <span>${dueDate}</span>
      <button class="delete-btn" onclick='todoList.splice(${i}, 1); displayItems()'>Delete</button>
      `;
  }
  containerElement.innerHTML = newHTML;

}