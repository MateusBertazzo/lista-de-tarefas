const inputTask = document.querySelector('.input-tarefa')
const btnTask = document.querySelector('.btn-tarefa')
const task = document.querySelector('.tarefas')

const createLi = () => {
  const li = document.createElement('li');
  return li;
};

inputTask.addEventListener('keypress', function(event) {
  if(event.keyCode === 13) {
    if(!inputTask.value) return;
    createTask(inputTask.value);
  };
});

const createTask = (textInput) => {
  const li = createLi();
  li.innerText = textInput;
  task.appendChild(li);
};

btnTask.addEventListener('click', function(event) {
  if(!inputTask.value) return;
  createTask(inputTask.value);
});


