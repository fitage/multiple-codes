console.log(100)
console.log(-34)
console.log("Javascript tutorial")
console.log(45+10)
console.log(10%3)
console.log(2**3)

let isaac = 50
let fit = 20
let aTotal = isaac + fit
console.log(total)

// single line comment 
/* multi line
comment */

let aPrice = 9990
let priceDisplayed = price/100
console.log(priceDisplayed)

// math object
let a = 2.568576396
let roundedA = Math.round(a)
console.log(roundedA)

//round upward
let b = 3.464
let roundedB = Math.ceil(b)
console.log(roundedB)

//round down
let c = 2.9
let roundedC = Math.floor(c)
console.log(roundedC)

//exponential math
let d = 4
let poweredD = Math.pow(d, 2)
console.log(poweredD)

//square root
let e = 64
let squareRootE = Math.sqrt(e)
console.log(squareRootE)

//random number
let randomNumber
randomNumber = Math.random()
randomNumber = Math.round(randomNumber)
console.log(randomNumber)

// finding minimum and max value
let f = 10
let g = 20
let h = 15
let maxValue = Math.max(f, g, h)
console.log(maxValue)
let minValue = Math.min(f, g , h)
console.log(minValue)

// post increment operato
let i = 10
i++
console.log(i)

//pre increment operator
let j = 20
++j
console.log(j)
// post decrement operato
let k = 10
k--
console.log(k)

//pre decrement operator
let l = 20
--l
console.log(l)

// hypotenuse operation
let base = 4
let optuse = 8
let hyp = Math.pow(base, 2) + Math.pow(optuse, 2)
hyp = Math.sqrt(hyp)
console.log(hyp)
hyp = Math.round(hyp)
console.log(hyp)

//greater/lesser/greater or equal/lesser or equal than operator
let m = 30
let n = 40
let checkGreater = m >= n
console.log(checkGreater)

let fullName = "isaac"
let city = "lagos"
//template literals
let sentence = `this user name is ${fullName} and this user is from ${city}`
console.log(sentence)

//character count
let count = fullName.length
console.log(count)

// how to find the position of a character
let findIndex = fullName.indexOf(`i`)
console.log(findIndex)

//how to use the character to know which letter is occupying the position
let findCharacter = fullName.charAt(0)
console.log(findCharacter)

//how to find the last position of a character
let findLastIndex = fullName.lastIndexOf(`a`)
console.log(findLastIndex)

//include property
let anotherName = `fit idan`
let checkForCharacter = anotherName.includes(`g`)
console.log(checkForCharacter)

//trim
let stateName = ` texas  `
let trimmedString = stateName.trim()
console.log(trimmedString)

//uppercase
let variableName = `i am isaac`
let allCaps = variableName.toUpperCase()
console.log(allCaps)

//replace string character
let height = `100cm`
let replacedString = height.replace(`cm`, ``)
console.log(replacedString)

// slicing string

let cityCountry = `Nairobi united state of america`
let country
city = cityCountry.slice(0, cityCountry.indexOf(` `))
console.log(city)
country = cityCountry.slice(cityCountry.indexOf(` `))
console.log(country)
let trimmedCountry = country.trim()
console.log(trimmedCountry)

// how to check type of data
let newName = 1234
let check = typeof(newName)
console.log(check)

// how to convert type of data
let oldName = 1234
let convert = Boolean(oldName)
convertData = typeof(convert)
console.log(convertData)

// if statements
let price = 100
let amountOnCard = 500
if(amountOnCard < price) {
    console.log(`you are broke`)
}else{
    console.log(`go ahead and buy`)
}

// else if statements

let userAge = 17
if(userAge === 18){
    console.log(`you can create an account with us`)
}else if(userAge >= 18){
    console.log (`you can create an account`)
}else if(userAge < 18){
    console.log(`error! please come back when you are 18 and above`)
}

let age = 18
if (age === 18){
    console.log(`you can take alcohol`)
}else if(age>=18){
    console.log(`you can aswell take alcohol`)
}

let loggedIn = true
if(loggedIn === true){
    console.log(`you can post status`)
}else{
    console.log(`please create an account`)
}

// if not operator which is !

if (!loggedIn){
    console.log(`create a thing`)
}

// how to collect data from the browser
let num = window.prompt(`enter your num`)
console.log(num)

// how to calculate the average of three number

let firstNumber = window.prompt (`enter first number`)
let secondNumber = window.prompt (`enter second number`)
let thirdNumber = window.prompt (`enter third number`)
firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)
thirdNumber = Number(thirdNumber)
let average = (firstNumber + secondNumber + thirdNumber)/3

console.log(average)

// window prompt & if statement
let uAge = window.prompt(`enter your age`)
uAge = Number(uAge)
if(uAge >=18){
    console.log(`sign n`)
}else{
    console.log(`come back when you are 18 and above`)
}

// window prompt and else if statement
let xAge = window.prompt(`enter your age`)
let xCountry = window.prompt(`enter country`)
xAge = Number(xAge)
if(xAge ===18){
    console.log(`my app is meant for you`)
}else if (xAge ===45){
    console.log(`i can recommend an app for you`)
}else{
    console.log(`go to twitter`) 
}

// And operator
if(xAge>= 18 && xCountry === `nigeria`){
    console.log(`i love you`)
}else{
    console.log(`i hate you`)
}

// Or operator
if(xAge >= 18 || xCountry === `nigeria`){
    console.log(`trial`)
}else{
    console.log(`testing`)
}

// switch 

switch(true){
    case xAge > 18 && country === `america`:
        console.log(`you can join this app`)
        break
    case xAge >= 18 || xCountry === `america`:
        console.log(`you can also join this app`)
        break
    case xAge > 18 && xCountry === `japan`:
        console.log(`we welcome you to our app`)
        break
    case xAge >= 18 || xCountry === `japan`:
        console.log(`please welcome and stay cool`)
        break
    default:
        console.log(`you are not eligible for our product yet`)    
}

// ternary operators

let dAge = window.prompt(`enter your own age`)
dAge = Number(dAge)
let dcountry = window.prompt(`enter your own country`)
dAge >= 18 && country === `Brazil` ? console.log(`YES`) : console.log(`NO`)

// replace the following 

1. double quotes("") with template literals(``)
2. else if with switches
3. if statements with ternary operators


// while loop
let vAge = window.prompt (`enter my age`)
vAge = Number(vAge)
while(vAge < 16){
    console.log(`confirm`)
    vAge++
}

// do while loop
let age = window.prompt(`enter you age`)
do {
    age = age++
}

//for loop
for(let age = 1; age<10 ;  age++){
    console.log(`the code is running ${age} times`)
}


// age group checking system
let age = window.prompt(`enter your age`)
age = Number (age)

switch(true){
    case age > 1 && age <=12:
        console.log(`you are a toddler`)
        break
    case age >= 13 && age <=19:
        console.log(`you are a teenager`)
        break
    case age >= 20 && age <45:
        console.log(`you are a youth`)
        break
    case age >= 45:
        console.log(`you are a senior citizen`)
        break
        default:
            console.log(`you enetered a wrong data`)
}

// break loop
for(let creditors = 0; creditors <=10; creditors++ ){
    if (creditors === 6){
        break
    }
    console.log(`debt paid`, creditors)
}

// continue statement 
for(let creditors = 0; creditors <=10; creditors++ ){
    if (creditors === 6){
        continue
    }
    console.log(`debt paid`, creditors)
}


// object

const rectangleObject = {
    color : `red`,
    height : 420,
    width : 628, 
    visible : true
}
// accessing all the keys of an object 
let allKeys = Object.keys(rectangleObject)
console.log(allKeys)
// accessing all the values of an object
let allValues = Object.values(rectangleObject)
console.log(allValues)
// accessing individual key in an object
let objectWidth = rectangleObject.width
console.log(objectWidth)

let objectColor = rectangleObject.color
console.log(objectColor)

let objectHeight = rectangleObject.height
console.log(objectHeight)

// how to edit an object
rectangleObject.cornerRadius = 24
console.log(rectangleObject)

// how to delete a key from an object
 delete rectangleObject.visible
 console.log(rectangleObject)

 // object nesting
 const textObject = {
    color : `black`,
    typography : {
        fontFamily : `inter`,
        fontSize : 12,
        fontWeight : `medium`
    },
    height : 42
 }
 console.log(textObject)

 // how to access the keys in the nested object

 let typographyKey = textObject.typography.fontFamily
 console.log(typographyKey)
 let typographKey = textObject.typography.fontSize
 console.log(typographKey)

 // how to duplicate an object

const juniorStudentProfile = {
    age : 24,
    nameOfPerson : `isaac`,
    country : `canada`,
    tutionPayment : true
}

const seniorStudentProfile = Object.create(juniorStudentProfile)
seniorStudentProfile.gradYear = `2023`
console.log(seniorStudentProfile)

// de-structuring object
const payment = {
    amount : 300,
    customerName : `isaac`,
    customerCountry : `nigeria`,
    customerId : 1112
}

const { customerName} = payment
let sentence = `the name of the customer that paid is ${customerName}`
console.log(sentence)

// array
const newArray = [`rice`, `beans`, `eggs`, 500, true]
console.log(newArray)

// index position of an array
let listPosition = newArray[4]
let arrayLength = newArray.length
console.log(listPosition)
console.log(arrayLength)

// add item to the beginning of an array
let addNewArray = newArray.unshift(`pizza`)
console.log(newArray)
// remove item from the beginning of an array
let removeNewArray = newArray.shift(`pizza`)
console.log(newArray)
// add item to the end of an array
let addNewArrayEnd = newArray.push(`cold-stone`)
console.log(newArray)

// remove item from the end of an array
let removeLastNewArray = newArray.pop()
console.log(newArray)

// how to remove a specific item from an array
let removeSpecificItem = newArray.splice(2, 1)
console.log(newArray)

// how to replace an item inside an array
newArray[2] = `bread`
console.log(newArray)

// how to slice an array i.e remove item outside of a specified range
const oldArray = [`isaac`, `fit`, `james`, `john`, `joy`, `huck`, `jake`]
let slicedArray = oldArray.slice(0,5)
console.log(slicedArray)

// how to convert an array to a string
let joinedArray = oldArray.join()
console.log(joinedArray)

// how to convert a string to an array
let convertBackToString = joinedArray.split(`,`)
console.log(convertBackToString)

// how to join two array together i.e concatenation
const firstArray = [`name`, true, false]
const secondArray = [`isaac`, false, true, 500 ]

let concatedArray = firstArray.concat(secondArray)
console.log(concatedArray)

// nesting arrays
const market1 = [`game`, `work`, 500]
const market2 = [`rice`, `bread`, 700]

const nestArray = [market1, market2]

// how to access each nested item
let accessItem = nestArray[0][1] 
console.log(accessItem)

// the selected 0 represent the index position of market1 where the other selected 1 represent the index position of market1 content


// hot to create an empty array

const emptyArray = []

// how to add an item inside already created empty array
emptyArray[1] = `ghana`
console.log(emptyArray)

// how to nest array inside an object

const onjectWidthArray = {
    color : `red`,
    anArray : [`isaac`, true]
}

// functions in javascript
function nameOfCars(){
    console.log(`just cars`)
}
nameOfCars()

// variables as function parameters
function numberofplayers(){
    let player1 = window.prompt(`enter player1 no`)
    player1 = Number(player1)
    let player2 = window.prompt(`enter player2 no`)
    player2 = Number(player2)
    let sum = player1 + player2
    console.log(sum)
}
numberofplayers()

// write in another way
function sumshape (triangle, rectangle){
    let add = triangle + rectangle
    console.log(add)
}
sumshape(100, 200)
// write in another way
function sumshape (triangle = 100, rectangle = 200){
    let add = triangle + rectangle
    console.log(add)
}
sumshape()

// return statement in function

function nameofA(){
    let a = 10
    let b = 20
    let c = 10
    let average = (a+b+c)/3
    return average
}
console.log(nameofA())

function totalprice(cost, numberofitems){
    let thetotalprice = cost * numberofitems
    return thetotalprice
}
console.log(totalprice(100,5))


// how to collect email and get username from email by taking out the email domain

function extractusername(){
    let email = window.prompt(`enter your email`)
    let slicedemail = email.slice(0, email.indexOf(`@`))
    return slicedemail
}
console.log(extractusername())


// Anonymous function or function expression
const anonymousfunction = function (){

}

// how to create object method in javascript 

const gadget = {
    nameofdevice : `samsung`,
    priceofdevice : 500,
    numberofdevice : 2,
    totalprice : function (){
        let devicename = this.nameofdevice
        let deviceprice = this.priceofdevice
        let devicenumber = this.numberofdevice
        let actualprice = deviceprice * devicenumber
        return actualprice
    }
}
let accessgadget = gadget.totalprice()
console.log(accessgadget)


// creating arrow functions

const total = () =>{

}

how to pass a variable from one function to another
console.log(totalprice())
function totalprice(){
    let priceofitem = 100
    let itemcount = 4
    let mytotalprice = priceofitem * itemcount
    calctax(mytotalprice)  // an argument
    return mytotalprice
}

function calctax(mytotalprice){
    let tax = mytotalprice
    tax = tax/10
    console.log(tax)
}

how to create a class NB: a class is used to
class Car {
    // 1. storing data in key values pairs using the below
constructor (){
    this.nameOfCar = `benz`
    this.yearOfCar = 2013
    this.colorOfCar = `blue`

}


// put data to action using methods i.e a method is a function inside an object
carSentence(){
    return `this is a ${this.yearOfCar} ${this.colorOfCar} ${this.nameOfCar}`
}
}

let isaacCar = new Car ()
console.log(isaacCar.carSentence())

// real time way of using a class

class Car {
    constructor(nameOfCar, yearOfCar, colorOfCar, speed, time){
        this.nameOfCar = nameOfCar
        this.yearOfCar = yearOfCar
        this.colorOfCar = colorOfCar
        this.speed  = speed
        this.time = time
    }

    calculateDistance(){
        let distance = this.speed * this.time
        return `the distance covered by this ${this.colorOfCar} ${this.nameOfCar} that was made in ${this.yearOfCar} is ${distance}`
    }

    guessPriceRange(){
        if(this.yearOfCar >= 2000 && this.yearOfCar < 2005){
            return `the price will be within the range 100k$ and 150k$`
        }else if(this.yearOfCar > 2005 && this.yearOfCar < 2010){
            return `the price will be within 200k$ and 300k$`
        }else{
            return `we cannot guess the price of the car`
        }
    }
}

let userCalledIsaac = new Car (`benz`, 2008, `blue`, 120, 30)
console.log(userCalledIsaac.calculateDistance())
console.log(userCalledIsaac.guessPriceRange())

let userCalledFit = new Car (`lexus`, 2003, `black`, 200, 30)
console.log(userCalledFit.calculateDistance())
console.log(userCalledFit.guessPriceRange())

// assignment 
class Crypto {
    constructor (nameOfCrypto, priceOfCrypto, quantityOfCrypto){
        this.nameOfCrypto = nameOfCrypto
        this.priceOfCrypto = priceOfCrypto
        this.quantityOfCrypto = quantityOfCrypto
    }

    totalAmountOfCrypto(){
       let Amount = this.priceOfCrypto * this.quantityOfCrypto
        return Amount
    }

    TaxOnCrypto (Amount){
        let CryptoTax = Amount
        CryptoTax = CryptoTax/10
        return CryptoTax
    }
}
let IsaacCrypto = new Crypto (`ETH`, 3000, 5)
console.log(IsaacCrypto.totalAmountOfCrypto())
console.log(IsaacCrypto.TaxOnCrypto())




// javascript code for the little website

// 5 ways to select html element using DOM

// 1. by tag name
let selectTagName = document.getElementsByTagName(`h1`)

// 2. by class
let selectClass = document.getElementsByClassName(`container`)

// 3. by ID
let selectId = document.getElementById(`first-title-text`)

// 4. by query selector
let selectQuery = document.querySelector(`#first-title-text`)

// 5. 
let selectQuerySelectorAll = document.querySelectorAll(`div`)


// removing an element from the web page using the DOM

let removeItem = document.getElementById (`first-container`)
removeItem.remove()

// how to create a html element using javascript and add it to the already created html

let placeToPut = document.getElementById(`main-container`)
let newDiv = document.createElement(`div`)
placeToPut.append(newDiv)

// how to add attributes to a newly created 
newDiv.setAttribute(`class`, `third-container`)
newDiv.setAttribute(`id`, `third-container`)

// how to insert element inside an element using javascript i.e one element at a time
newDiv.innerHTML = `<h1> this is the third heading element</h1>`

// how to change text content using javascript

let changeTextContent = document.getElementById(`first-title-text`)
// changeTextContent.textContent = `new title`

// or use the below 
changeTextContent.innerText = `new title`

// how to set an attribute on an element when you have multiple similar element

let allHeadings = document.querySelectorAll(`h1`)
allHeadings[2].setAttribute(`id`, `third-title-text`)

// how to get an attribute from a html element

let gettingAttribute = document.getElementById(`second-container`)
let gottenAttribute = gettingAttribute.getAttribute(`class`)

// how to remove attribute from a html element 
let chooseElement = document.getElementById(`main-container`)
let removedElement = chooseElement.remove(`class`)

class list object

let chooseElementForClassList = document.getElementById(`second-paragraph-text`)
chooseElementForClassList.classList.add(`second-paragraph-text`)

// how to remove a class
let deleteClass = document.getElementById(`second-paragraph-text`)
deleteClass.classList.remove(`second-paragraph-text`)