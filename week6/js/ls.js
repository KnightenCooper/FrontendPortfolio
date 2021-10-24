
// select everything
// select the todo-form
const todoForm = document.querySelector('.todo-form');
// select the input box
const todoInput = document.querySelector('.todo-input');
// select the <ul> with class="todo-items"
const todoItemsList = document.querySelector('.todo-items');

// variable to store value to determine which tasks are displayed
let x = '';

// array which stores every todos
let todos = [];

// add an eventListener on form, and listen for submit event
todoForm.addEventListener('submit', function(event) {
  // prevent the page from reloading when submitting the form
  event.preventDefault();
  addTodo(todoInput.value); // call addTodo function with input box current value
});

// function to add todo
function addTodo(item) {
  // if item is not empty
  if (item !== '') {
    // make a todo object, which has id, content, and completed properties
    const todo = {
      id: Date.now(),
      content: item,
      completed: false
    };

    // then add it to todos array
    todos.push(todo);
    addToLocalStorage(todos); // then store it in localStorage

    // finally clear the input box value
    todoInput.value = '';
  }
}
 
function setXAll() {
    localStorage.setItem('allActiveOrCompleted', JSON.stringify("all"));
    addToLocalStorage(todos);
}

function setXActive() {
    localStorage.setItem('allActiveOrCompleted', JSON.stringify("active"));
    addToLocalStorage(todos);
}
function setXCompleted() {
  localStorage.setItem('allActiveOrCompleted', JSON.stringify("completed"));
  addToLocalStorage(todos);
}
// function to render given todos to screen
function renderTodosActive(todos) {
    sum = todos.length;

  // clear everything inside <ul> with class=todo-items
  todoItemsList.innerHTML = '';
  // run through each item inside todos
  todos.forEach(function(item) {
    // check if the item is completed
    const checked = item.completed ? 'checked': null;

    // make a <li> element and fill it
    // <li> </li>
    const li = document.createElement('li');
    // <li class="item"> </li>
    li.setAttribute('class', 'item');
    // <li class="item" data-key="20200708"> </li>
    li.setAttribute('data-key', item.id);
    /* <li class="item" data-key="20200708"> 
          <input type="checkbox" class="checkbox">
          Go to Gym
          <button class="delete-button">X</button>
        </li> */
    // if item is completed, then add a class to <li> called 'checked', which will add line-through style
    if (item.completed === true) {
      li.classList.add('checked');
      li.classList.add('displayNone');
      sum = sum - 1;
    }

    li.innerHTML = `
      <input type="checkbox" class="checkbox" ${checked}>
      ${item.content}
      <button class="delete-button">Delete X</button>
    `;
    // finally add the <li> to the <ul>
    todoItemsList.append(li);
  });
  document.getElementById("numberOfTasksLeft").innerHTML = String(sum) + " Tasks Left";
}
// function to render given todos to screen
function renderTodosAll(todos) {
    sum = todos.length;

    // clear everything inside <ul> with class=todo-items
    todoItemsList.innerHTML = '';
    // run through each item inside todos
    todos.forEach(function(item) {
      // check if the item is completed
      const checked = item.completed ? 'checked': null;
  
      // make a <li> element and fill it
      // <li> </li>
      const li = document.createElement('li');
      // <li class="item"> </li>
      li.setAttribute('class', 'item');
      // <li class="item" data-key="20200708"> </li>
      li.setAttribute('data-key', item.id);
      /* <li class="item" data-key="20200708"> 
            <input type="checkbox" class="checkbox">
            Go to Gym
            <button class="delete-button">X</button>
          </li> */
      // if item is completed, then add a class to <li> called 'checked', which will add line-through style
      if (item.completed === true) {
        li.classList.add('checked');
        sum = sum - 1;
      }
  
      li.innerHTML = `
        <input type="checkbox" class="checkbox" ${checked}>
        ${item.content}
        <button class="delete-button">Delete X</button>
      `;
      // finally add the <li> to the <ul>
      todoItemsList.append(li);
    });
    document.getElementById("numberOfTasksLeft").innerHTML = String(sum) + " Tasks Left";
  }

  // function to render given todos to screen
function renderTodosCompleted(todos) {
    sum = todos.length;

    // clear everything inside <ul> with class=todo-items
    todoItemsList.innerHTML = '';
    // run through each item inside todos
    todos.forEach(function(item) {
      // check if the item is completed
      const checked = item.completed ? 'checked': null;
  
      // make a <li> element and fill it
      // <li> </li>
      const li = document.createElement('li');
      // <li class="item"> </li>
      li.setAttribute('class', 'item');
      // <li class="item" data-key="20200708"> </li>
      li.setAttribute('data-key', item.id);
      /* <li class="item" data-key="20200708"> 
            <input type="checkbox" class="checkbox">
            Go to Gym
            <button class="delete-button">X</button>
          </li> */
      // if item is completed, then add a class to <li> called 'checked', which will add line-through style
      if (item.completed === true) {
        li.classList.add('checked');
        sum = sum - 1;
      }
      if (item.completed != true) {
        li.classList.add('checked');
        li.classList.add('displayNone');
      }
  
      li.innerHTML = `
        <input type="checkbox" class="checkbox" ${checked}>
        ${item.content}
        <button class="delete-button">Delete X</button>
      `;
      // finally add the <li> to the <ul>
      todoItemsList.append(li);
    });
    document.getElementById("numberOfTasksLeft").innerHTML = String(sum) + " Tasks Left";

  }

// function to add todos to local storage
function addToLocalStorage(todos) {
  // conver the array to string then store it.
  localStorage.setItem('todos', JSON.stringify(todos));
  // render them to screen
//   renderTodos(todos);
  const allActiveOrCompleted = localStorage.getItem('allActiveOrCompleted');
  if (allActiveOrCompleted === JSON.stringify("active") ) {
    // converts back to array and store it in todos array
    renderTodosActive(todos);
}
if (allActiveOrCompleted === JSON.stringify("all") ) {
    // converts back to array and store it in todos array
    renderTodosAll(todos);
}
if (allActiveOrCompleted === JSON.stringify("completed") ) {
    // converts back to array and store it in todos array
    renderTodosCompleted(todos);
}
}

// function helps to get everything from local storage
function getFromLocalStorage() {
    const reference = localStorage.getItem('todos');
    const allActiveOrCompleted = localStorage.getItem('allActiveOrCompleted');
    // if reference exists
//   if ((reference)) {
//     // converts back to array and store it in todos array
//     todos = JSON.parse(reference);
//     renderTodosAll(todos);
//     console.log(allActiveOrCompleted)
//   }
  if ((reference) && allActiveOrCompleted === JSON.stringify("active") ) { // if we are viewing the active screen the call renderTodosActive so only the active tasks are shown
    // converts back to array and store it in todos array
    todos = JSON.parse(reference);
    renderTodosActive(todos);
}
  if ((reference) && allActiveOrCompleted === JSON.stringify("all") ) { // if we are viewing the active screen the call renderTodosAll so all the active and completed tasks are shown
    // converts back to array and store it in todos array
    todos = JSON.parse(reference);
    renderTodosAll(todos);
}
if ((reference) && allActiveOrCompleted === JSON.stringify("completed") ) { // if we are viewing the active screen the call renderTodosCompleted so only the completed tasks are shown
    // converts back to array and store it in todos array
    todos = JSON.parse(reference);
    renderTodosCompleted(todos);
}
}

// toggle the value to completed and not completed
function toggle(id) {
  todos.forEach(function(item) {
    // use == not ===, because here types are different. One is number and other is string
    if (item.id == id) {
      // toggle the value
      item.completed = !item.completed;
    }
  });

  addToLocalStorage(todos);
}

// deletes a todo from todos array, then updates localstorage and renders updated list to screen
function deleteTodo(id) {
  // filters out the <li> with the id and updates the todos array
  todos = todos.filter(function(item) {
    // use != not !==, because here types are different. One is number and other is string
    return item.id != id;
  });

  // update the localStorage
  addToLocalStorage(todos);
}

// initially get everything from localStorage
getFromLocalStorage();

// after that addEventListener <ul> with class=todoItems. Because we need to listen for click event in all delete-button and checkbox
todoItemsList.addEventListener('click', function(event) {
  // check if the event is on checkbox
  if (event.target.type === 'checkbox') {
    // toggle the state
    toggle(event.target.parentElement.getAttribute('data-key'));
  }

  // check if that is a delete-button
  if (event.target.classList.contains('delete-button')) {
    // get id from data-key attribute's value of parent <li> where the delete-button is present
    deleteTodo(event.target.parentElement.getAttribute('data-key'));
  }
});



// Sources:
// https://javascript.info/import-export
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
// https://jsfiddle.net/mksty8eq/
// https://www.javascripttutorial.net/string/javascript-string-equals/
// https://stackoverflow.com/questions/8710442/how-to-specify-multiple-conditions-in-an-if-statement-in-javascript
// https://www.washington.edu/accesscomputing/webd2/student/unit5/module2/lesson5.html
// https://www.dummies.com/web-design-development/javascript/changing-css-with-javascript/
// https://www.w3schools.com/cssref/pr_class_visibility.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
// https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjShqis99vzAhWCkmoFHeYkDysQFnoECAIQAw&url=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F9404813%2Fhow-to-view-or-edit-localstorage%23%3A~%3Atext%3DIt%27s%2520simple.%2Cyour%2520browser%27s%2520local%2520storage%2520there.&usg=AOvVaw1oAJC910U0Ebf0CUfzUhwM
// https://thecodingpie.com/post/how-to-build-a-todo-list-app-with-javascript-and-local-storage
// https://trello.com/b/94QLblUO/todo-project