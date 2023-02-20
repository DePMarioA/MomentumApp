const clock = document.querySelector('#clock')

// clock.innerText = 'hello'

function getClock() {
    const date = new Date()
    // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
    let hour = date.getHours()
    if (hour>12){
        hour= hour-12
    }
    
    const hours = String(hour).padStart(2,'0')
    const minutes = String(date.getMinutes()).padStart(2,'0')
    const seconds = String(date.getSeconds()).padStart(2,'0')

    clock.innerText = `${hours}:${minutes}:${seconds}`
}
getClock()
setInterval(getClock,1000)



// setInterval(sayHello,5000)
// setTimeout(sayHello,5000)



