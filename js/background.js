const  images = [
    '0.png',
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    
]

const todaysImg = images[Math.floor(Math.random()*images.length)]
const src = `imgs/${todaysImg}`
const image = document.createElement('img')
image.src = `imgs/${todaysImg}`
image.classList.add('bk')
// document.body.appendChild(image)
document.body.style.backgroundImage= `url(${src})`

