


// LOGIN SCREEN

let button = document.getElementById(`button`)
let emailInput = document.getElementById(`emailInput`)
let passwordInput = document.getElementById(`passwordInput`)
let formNotice = document.getElementById(`formNotice`)
let hiddenAlert = document.getElementById(`hidden-alert`)

button.addEventListener(`click`, function(){
    if(emailInput.value === ""){
        formNotice.innerText = `please enter your email`
    }else if(passwordInput.value === ""){
        formNotice.innerText = `please check your password`
    }else{
        hiddenAlert.classList.remove(`hidden-alert`)
        hiddenAlert.classList.add(`reveal-alert`)
    }
})


let ourButton = document.getElementById(`button`)
ourButton.addEventListener(`click`, function(){

})

let html = document.querySelector(`html`)
html.addEventListener(`click`, function(){
    console.log(`html is logged`)
},true)
let body = document.querySelector(`body`)
body.addEventListener(`click`, function(){
    console.log(`body is logged`)
},true)
let buttonContainer = document.getElementById(`button-container`)
buttonContainer.addEventListener(`click`, function(){
    console.log(`button container is logged`)
},true)
let buttons = document.getElementById(`buttons`)
buttons.addEventListener(`click`, function(event){
    console.log(event)
},true)