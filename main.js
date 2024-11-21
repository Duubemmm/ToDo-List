// DOM Elements
const taskInput = document.getElementById('input-btn'); // Input field for new tasks
const addTask = document.getElementById('add-btn'); // Button to add a new task
const taskContainer = document.getElementById('task-container')// Container for the task list
const displayArea = document.getElementById('display-area') // Area to display completed messages
const clearButton = document.querySelector('.clear-button')// Button to clear completed messages

//Add Task Event Listener
addTask.addEventListener('click', addToDo)

//Function To Add A New Task
function addToDo(){
    const task = taskInput.value.trim();

//Prevents User From Adding Empty Task
    if(task === "")
    {
        alert('Write your to-do list for today');
        return;
    }

//Create Task Elements
    const taskList = document.createElement('div')
    const toDoTask = document.createElement('span')
    const checkButton = document.createElement('input')
    const deleteTask = document.createElement('button');

//Assign properties to the Task Elements
    toDoTask.textContent = task;
    toDoTask.classList.add('task-item')

    deleteTask.textContent = 'Delete';
    deleteTask.classList.add('delete-button')

    checkButton.type = 'checkbox';

//Append Task Elements to the Task Container
    taskList.appendChild(checkButton)
    taskList.appendChild(toDoTask)
    taskList.appendChild(deleteTask)
    taskContainer.appendChild(taskList);

//Clear the input field after adding the task
    taskInput.value = '';

// Delete a Task Event Listener
    deleteTask.addEventListener('click', deleteToDo)

    function deleteToDo(){
    if( deleteTask.textContent === "Delete")
{
    taskList.remove()
}
}

//Check Task Status Event Listener

 checkButton.addEventListener('change', checkTask)
 function checkTask() {
    if (checkButton.checked) {
    const displayText = document.createElement('p')
    const completedMessage = `Yayy!! You've completed your "${toDoTask.textContent}" task.`;
    displayText.textContent = completedMessage;
    displayArea.appendChild(displayText)
    displayText.style.textDecoration = "line-through";
    clearButton.style.display = 'block';

   deleteToDo();

   //Add EventListener To The ClearButton
   clearButton.addEventListener('click', function(){
        displayText.textContent = '';
        clearButton.style.display = 'none';
}
)}}};

//Add Task on Enter Key Press
taskInput.addEventListener('keypress', (event) =>
    {
        if(event.key === 'Enter')
            {
                addToDo()
            }
    }
)