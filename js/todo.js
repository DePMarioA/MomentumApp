const toDoform = document.getElementById('todo-form');
const toDoInput= toDoform.querySelector('input')
const toDoList= document.getElementById('todo-list');
let STOREDLIST = localStorage.getItem(ISACTIVE_KEY)

let localList = []


function saveToDos(){
    localStorage.setItem(STOREDLIST,JSON.stringify(localList))
}
function deleteItem(event){
    const li = event.composedPath()[1] // or const li = event.target.parentElement
    li.remove()
    localList = localList.filter((x)=>x.id!==parseInt(li.id))
    saveToDos()
    
}



function paintToDo(toDoObject){
    const li = document.createElement('li')
    li.id = toDoObject.id
    const span = document.createElement('span')
    span.innerText= toDoObject.text
    const button = document.createElement('button')
    button.innerText='❌'
    li.appendChild(span)
    li.appendChild(button)
    button.addEventListener('click',deleteItem)
    toDoList.appendChild(li)
}

function handleSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value
    toDoInput.value=''
    const toDoObject={
        id:Date.now(),
        text: newToDo
    }

    localList.push(toDoObject)
    paintToDo(toDoObject)
    saveToDos()
}

function startApp(){
    STOREDLIST = localStorage.getItem(ISACTIVE_KEY)
    const StoredList  =  JSON.parse(localStorage.getItem(STOREDLIST))
    if(StoredList!==null){
        localList = StoredList
        StoredList.forEach(element => {
            paintToDo(element)
        });
    }
}

startApp()



if(localStorage.getItem('Active')===''){
   toDoform.classList.add('hidden')
}


toDoform.addEventListener('submit',handleSubmit)
