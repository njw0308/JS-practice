const todoform = document.querySelector(".js-todoform"),
todoinput = todoform.querySelector("input"),
todolist = document.querySelector(".js-todolist");

const TODO_LS = "todos";
let TODOS = [];


function delete_todo(event){
    const li_to_delete = event.target.parentNode;
    todolist.removeChild(li_to_delete);
    const cleanTodos= TODOS.filter(function(todo){
        return todo.id !== parseInt(li_to_delete.id);
    });
    TODOS = cleanTodos;
    saveTOdo()
}

function saveTOdo(){
    localStorage.setItem(TODO_LS , JSON.stringify(TODOS));
    
}

function painttodo(text){
    const li = document.createElement("li");
    const delete_btn= document.createElement("button");
    delete_btn.innerText = "X";
    const span = document.createElement("span");
    const newID = TODOS.length +1 ;
    delete_btn.addEventListener("click" , delete_todo);

    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delete_btn);
    li.id = newID
    todolist.appendChild(li);
    const todoobj = {
        text : text ,
        id : newID
    };
    TODOS.push(todoobj);
    saveTOdo();
}

function handleSubmmit(event){
    event.preventDefault();
    const current_value = todoinput.value;
    painttodo(current_value);
    todoinput.value = "";
}

function loadtodo(){
    const loadedtodo = localStorage.getItem(TODO_LS);
    if( loadedtodo !== null){
        const parsedToDos = JSON.parse(loadedtodo);
        parsedToDos.forEach(
            function(todo){
                painttodo(todo.text);
            }
        )
    };
}

function init(){
    loadtodo();
    todoform.addEventListener("submit" , handleSubmmit)
}

init();