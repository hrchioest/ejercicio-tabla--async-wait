const baseUrl = "https://jsonplaceholder.typicode.com/todos";
let lista = [];
let todo = {
    title: "",
    userId: null,
    completed: false
};

const handleError = err => {
    alert (`Hubo un error. ${err}`)
}

 const getTodos = async () => {
    try {
        const res = await axios.get(baseUrl);
        lista = res.data;
        showTodo();

    } catch (err) {
        handleError(err);
    }
 }


const createTodo = async (title, userId) => {
   
    try {
        let data = {
            title,
            userId,
            completed: false
        }
        const res = await axios.post(baseUrl, data);
        lista.push(res.data);
        
    } catch (err) {
    handleError(err);
    }
 }

// otra manera de hacer que la funcion de delete no le gane la funcion showtodo, es agregando un callback, ya que se realiza el delete pero no se llega actualizar despues, sino antes.
const deleteTodo = async (id, callback) => {
    try {
        const res = await axios.delete(`${baseUrl}/${id}`);
        const index = lista.findIndex(todo => {
            return todo.id == id;
        })
        lista.splice(index, 1);
        callback();
        
    } catch (err) {
        handleError(err)
    }
 }

const modifyTodo = async (id, title, userId, completed) => {
    try {
        let data = {
            id,
            title,
            userId,
            completed
        }
        const res = await axios.put(`${baseUrl}/${id}`, data);
        for (let i = 0; i < lista.length; i++) {
            if(lista[i].id == id) {
                lista[i] = res.data;
            }
        }
    } catch (err) {
        handleError(err)
    }
}

getTodos();
