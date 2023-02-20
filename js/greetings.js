
const loginForm = document.querySelector('#login-form');
const logoutButton = document.querySelector('#logout');
const LoginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');
const storedUsers= document.querySelector('#stored-users')



const HIDDEN_CLASSNAME= 'hidden';
const USERNAME_KEY = 'Account';
const ISLOGGEDIN_KEY = 'LoggedIn'
const ISACTIVE_KEY= 'Active'

const savedUserName =  JSON.parse(localStorage.getItem(USERNAME_KEY))

let activeUser = localStorage.getItem(ISACTIVE_KEY)

let usernameList =[]


function changeTextBoxColor (s){
    LoginInput.classList.toggle('active2')
    // console.dir(LoginInput)
    
}

function onSubmit(info){
    info.preventDefault();
    username = LoginInput.value;

    const usernameObject={
        id:Date.now(),
        user:username
    }
    usernameList.push(usernameObject)
    saveAccounts()
    localStorage.setItem(ISLOGGEDIN_KEY,true)
    loadProfileforActive(username)
    hiddenElementsForActive()
    STOREDLIST = localStorage.getItem(ISACTIVE_KEY)

}

function paintGreeting(username){
    greeting.innerText = `Hello ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

function saveAccounts(){
    localStorage.setItem(USERNAME_KEY,JSON.stringify(usernameList))
}
function loadProfileforActive(username){
    localStorage.setItem(ISACTIVE_KEY,username)
    paintGreeting(username)
}
function hiddenElementsForActive(){
    loginForm.classList.add(HIDDEN_CLASSNAME)
    logoutButton.classList.remove(HIDDEN_CLASSNAME)
    storedUsers.classList.add(HIDDEN_CLASSNAME)
    toDoform.classList.remove(HIDDEN_CLASSNAME)
    document.querySelector('#logTitle').classList.add(HIDDEN_CLASSNAME)
}

function loadProfile(event){
    const name = event.composedPath()[0].innerText
    loadProfileforActive(name)
    hiddenElementsForActive()
    startApp()
}
function deleteItem(event){
    const li = event.composedPath()[1]
    localStorage.removeItem(li.firstChild.innerText)
    li.remove()
    usernameList = usernameList.filter((x)=>x.id!==parseInt(li.id))
    saveAccounts()
}

function getUserList(){
    savedUserName.forEach(element => {
        const li = document.createElement('li')
        li.id= element.id
        const span = document.createElement('span')
        span.innerText= element.user
        const button = document.createElement('button')
        button.innerText='❌'
        li.appendChild(span)
        li.appendChild(button)
        button.addEventListener('click',deleteItem)
        span.addEventListener('click',loadProfile)
        storedUsers.appendChild(li)
        
    });

}


if(activeUser===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener('submit',onSubmit,)
    LoginInput.addEventListener('click',changeTextBoxColor)
}
else if(activeUser===""){
    usernameList=savedUserName
    storedUsers.classList.remove(HIDDEN_CLASSNAME)
    getUserList()
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener('submit',onSubmit,)
    LoginInput.addEventListener('click',changeTextBoxColor)

}
else{
    // console.log(savedUserName);
    paintGreeting(activeUser)
    greeting.classList.remove(HIDDEN_CLASSNAME)
    logoutButton.classList.remove(HIDDEN_CLASSNAME)
    STOREDLIST = localStorage.getItem(ISACTIVE_KEY)
    document.querySelector('#logTitle').classList.add(HIDDEN_CLASSNAME)

}

function logoutFromAcct(){
    localStorage.setItem(ISACTIVE_KEY,'')
    location.reload()
}

logoutButton.addEventListener('click',logoutFromAcct)












// const isLoggedIn = localStorage.getItem(ISLOGGEDIN_KEY)
// if(isLoggedIn===String(true)){
//     console.log(savedUserName);
//     paintGreeting(savedUserName.user)
//     greeting.classList.remove(HIDDEN_CLASSNAME)
//     logoutButton.classList.remove(HIDDEN_CLASSNAME)
// }
// else{//isLoggedIn===null || isLoggedIn===String(false)
//     loginForm.classList.remove(HIDDEN_CLASSNAME)
//     loginForm.addEventListener('submit',onSubmit,)
//     LoginInput.addEventListener('click',changeTextBoxColor)
//     if(isLoggedIn!==null)
//         storedUsers.classList.remove(HIDDEN_CLASSNAME)
//         getUserList()

// }


// if (savedUserName!==null){
//     paintGreeting(savedUserName)
//     greeting.classList.remove(HIDDEN_CLASSNAME)
//     logoutButton.classList.remove(HIDDEN_CLASSNAME)

// }
// else{
//     loginForm.classList.remove(HIDDEN_CLASSNAME)
//     loginForm.addEventListener('submit',onSubmit,)
//     LoginInput.addEventListener('click',changeTextBoxColor)
// }

