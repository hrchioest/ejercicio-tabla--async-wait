const showTodo = () => {
    const tbody = document.querySelector('#body-list');
    for(let todo of lista) {
      const tr = document.createElement('tr');
      tr.className = 'todo-list';

      const spanId = document.createElement('span');
      spanId.className = 'todo-id';
      spanId.textContent = todo.id;

      const spanTitle = document.createElement('span');
      spanTitle.className ='todo-title';
      spanTitle.textContent = todo.title;

      const spanUser = document.createElement('span');
      spanUser.className = 'todo-user';
      spanUser.textContent = todo.userId;

      const spanCompleted = document.createElement('span');
      spanCompleted.className = 'todo-completed';
      spanCompleted.textContent= todo.completed ? 'completed': 'uncompleted';

      const botonDelete = document.createElement('button');
      botonDelete.className = 'todo-delete';
      botonDelete.textContent ='Eliminar'
      const deleteid = todo.id
      
      botonDelete.addEventListener('click', () => {
        tbody.textContent = '';
        deleteTodo(deleteid, () => {
          showTodo();
        });
      });
      
      const td = document.createElement('td');
      td.className='filas fila-user'
      const td1 = document.createElement('td');
      td1.className='filas'
      const td2 = document.createElement('td');
      td2.className='filas fila-user'
      const td3 = document.createElement('td');
      td3.className='filas'
      const td4 = document.createElement('td');
      td4.className='filas'
      td.appendChild(spanId);
      td1.appendChild(spanTitle);
      td2.appendChild(spanUser);
      td3.appendChild(spanCompleted);
      td4.appendChild(botonDelete)
      tr.appendChild(td);
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tbody.appendChild(tr);
    }
}

// una manera de hacer que la funcion agregar se actualice una vez que termine la funcion de creatodo es hacerlo con un await/ async
const addBoton = document.querySelector('#todo-create');

addBoton.addEventListener("click", async() => {
  const title = document.querySelector('#todo-title-create').value;
  const userId = document.querySelector('#todo-user-create').value;

  const tbody = document.querySelector('#body-list');
  tbody.textContent = '';
  await createTodo(title, userId);
  showTodo();

});

const addModify = document.querySelector('#todo-update');

addModify.addEventListener("click", async() => {
  const id = document.querySelector('#todo-id-update').value;
  const title = document.querySelector('#todo-title-update').value;
  const userId = document.querySelector('#todo-user-update').value;
  const completed = document.querySelector('#todo-completed-update').checked;

  const tbody = document.querySelector('#body-list');
  tbody.textContent = '';
  await modifyTodo(id, title, userId, completed);
  showTodo();
})






