const inputTask = document.querySelector('.input-tarefa')
const btnTask = document.querySelector('.btn-tarefa')
const task = document.querySelector('.tarefas')

// Cria li
const createLi = () => {
  const li = document.createElement('li');
  return li;
};

// Adiciona evento de keyPress ao pressionar ENTER
inputTask.addEventListener('keypress', function(event) {
  if(event.keyCode === 13) {
    if(!inputTask.value) return;
    createTask(inputTask.value);
  };
});

// Limpa caixa de texto toda vez que adiciono nova tarefa
const clearInput = () => {
  inputTask.value = '';
  inputTask.focus();
};

// Adiciona tarefa a OL
const createTask = (textInput) => {
  const li = createLi();
  li.innerText = textInput;
  task.appendChild(li);
  clearInput();
};

// Adiciona evento de click no Button
btnTask.addEventListener('click', function(event) {
  if(!inputTask.value) return;
  createTask(inputTask.value);
});


