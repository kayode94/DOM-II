// Your code goes here
window.addEventListener("load", function() {
    console.log("The page has now loaded");
    });
//DOM Selectors
const navContainer = document.querySelector('.main-navigation')
const footer = document.querySelector('.footer')
const intro = document.querySelector('.intro p')
const adventurePicture = document.querySelector('.content-section img')
const funBus = document.querySelector('.intro img')
const adventureAwaits = document.querySelector('.inverse-content img')
const mainContent = document.querySelector('body');
const navLinks = document.querySelector('.nav')
console.log(intro)
//Mouse Over Events
navContainer.addEventListener('mouseover', function (){
    navContainer.style.backgroundColor = 'yellow'
})

footer.addEventListener('mouseover', function (){
    footer.style.backgroundColor = 'red'
    footer.style.color = 'green'
})

//Double Click

adventurePicture.addEventListener('dblclick', function (){
    adventurePicture.style.opacity = '0.1'
})

funBus.addEventListener('dblclick', function (){
    funBus.style.border = 'solid red'
})

//Drag and Drop

adventureAwaits.addEventListener('dragend', function (){
    adventureAwaits.style.backgroundColor = 'magenta'
    adventureAwaits.style.height = '1000px'
    adventureAwaits.style.width = '1000px'
    adventureAwaits.stle.border = 'Dotted green'
})

//Wheel
mainContent.addEventListener('wheel', function (){
    mainContent.style.backgroundColor = 'purple'
})

//Resize

window.addEventListener('resize', function(){
    alert('We know what you did')
    mainContent.style.visibility = 'hidden'

})

//Select
intro.addEventListener('onfocus', function (){
    intro.textContent = 'DO NOT CHANGE'
})

//Stop Prop

navLinks.addEventListener('click', function(event){
    event.preventDefault()
})