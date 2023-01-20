//LEVEL 1

function fullName(){
    console.log('Thomas Sullivan')
}
fullName()

function fullName1(firstName, lastName){
    console.log(`${firstName} ${lastName}`)
}
fullName1('Thomas','Sullivan')

function addNumbers(num1, num2){
    return num1 + num2
}
console.log(addNumbers(Math.floor(Math.random()*100), Math.floor(Math.random()*100)))

const areaOfRectangle = (length, width) => {
    return length * width
}
console.log(areaOfRectangle(10, 15))

const perimeterOfRectangle = (length, width) =>{
    return 2 * (length + width)
}
console.log(perimeterOfRectangle(10, 15))

function volumeOfRectPrism(length, width, height) {
    return length * width * height
}
console.log(volumeOfRectPrism(10, 15, 5))

const areaOfCircle = r =>{
    return 3.14 * r * r
}
console.log(areaOfCircle(5))

function circumOfCircle(r){
    return 2 * 3.14 * r
}
console.log(circumOfCircle(Math.floor(Math.random()*100)))

const density = (mass, volume) =>{
    return (mass / volume)
}
console.log(density(Math.floor(Math.random()*100), Math.floor(Math.random()*100)))

function speed(distance, time){
    return distance / time
}
console.log(speed(Math.floor(Math.random()*100), Math.floor(Math.random()*10)))

const weight = (mass, gravity = 9.81) => {
    return mass * gravity
}
console.log(weight(Math.floor(Math.random()*100)))

function convertCelsiusToFahrenheit(temp){
    return ((temp*(9/5))+32)
}
console.log(convertCelsiusToFahrenheit(-40))

const bodyMassCalc = (kg, meters) => {
    let bmi = kg / (meters * meters)
    switch(true){
        case bmi < 18.4:
            console.log('Underweight')
            break
        case bmi < 24.9:
            console.log('Normal Weight')
            break
        case bmi < 29.9:
            console.log('Overweight')
            break
        default:
            console.log('Obese')
            break
    } 
}
bodyMassCalc(50, 1.75)
bodyMassCalc(50, 1.5)
bodyMassCalc(88.4, 1.82)
bodyMassCalc(100, 1.5)

function checkSeason(month){
    if (month == 'september' || month == 'october' || month == 'november') {
        return`${month} is in the season Autumn`
    } else if ( month == 'december' || month == 'january' || month == 'february'){
        return `${month} is in the season Winter`
    } else if (month == 'march' || month == 'april' || month == 'may'){
        return `${month} is in the season Spring`
    } else {
       return `${month} is in the season Summer`
    }
}
console.log(checkSeason('september'))
console.log(checkSeason('december'))
console.log(checkSeason('march'))
console.log(checkSeason('july'))

const findMax = (...args) =>{
    max = 0
    for (const num of args){
        if (num > max){
            max = num
        }
    }
    return max
}
console.log(findMax(Math.floor(Math.random()*100), Math.floor(Math.random()*100), Math.floor(Math.random()*100)))

//LEVEL 2

function printArray(array){
    for (const item of array){
        console.log(item)
    }
}
printArray(['heads','shoulders','knees','and','toes'])

function showDateTime(){
    const now = new Date()
    const year = now.getFullYear()
    let month = now.getMonth()
    month = ('0'+ month).slice(-1)
    let date = now.getDate()
    date = ('0' + date).slice(-2)
    let readableHours = now.getHours()
    readableHours = ("0" + readableHours).slice(-2)
    let readableMinutes = now.getMinutes()
    readableMinutes = ('0'+ readableMinutes).slice(-2)
    console.log(`${month+1}/${date}/${year} ${readableHours}:${readableMinutes}`)
}
showDateTime()

let x = 3
let y = 4
const swapValues = () => y = x
swapValues()
console.log(y)

function reverseArray(array){
    newArray = Array()
    for (i=array.length-1; i >= 0; i--) {
        newArray.push(array[i])
    }
    return newArray
}

let testArray = ['a','b','c','d','e']

console.log(reverseArray(testArray))

const capitalizeArray = array =>{
    capitalizedArray = Array()
    for (i=0; i < array.length; i++){
        capitalizedArray.push(array[i].toUpperCase())
    }
    return capitalizedArray
}
console.log(capitalizeArray(testArray))

function addItem(str){
    newArray = [...testArray]
    newArray.push(str)
    return newArray
}
console.log(addItem('lorum'))

const removeItem = index =>{
    newArray = [...testArray]
    newArray.splice(index, 1)
    return newArray
}
console.log(removeItem(3))

function sumOfNumbers(num){
    numbers = [...Array(num + 1).keys()]
    total = 0
    for (const num of numbers){
        total += num
    }
    return total
}
console.log(sumOfNumbers(5))

const sumOfOdds = num =>{
    numbers = [...Array(num + 1).keys()]
    oddNumbers = Array()
    total = 0
    for (i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 != 0){
            oddNumbers.push(numbers[i])
        }
    }
    for (const num of oddNumbers){
        total += num
    }
    return total
}
console.log(sumOfOdds(10))

function sumOfEvens(num){
    numbers = [...Array(num + 1).keys()]
    evenNumbers = Array()
    total = 0
    for (i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 == 0){
            evenNumbers.push(numbers[i])
        }
    }
    for (const num of evenNumbers){
        total += num
    }
    return total
}
console.log(sumOfEvens(10))

const evensAndOdds = num =>{
    numbers = [...Array(num + 1).keys()]
    evenNumbers = Array()
    oddNumbers = Array()
    for (i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 == 0){
            evenNumbers.push(numbers[i])
        } else {
            oddNumbers.push(numbers[i])
        }
    }
    console.log(`There are ${evenNumbers.length} even numbers\nThere are ${oddNumbers.length} odd numbers`)
}
evensAndOdds(100)

function sumsUp(...args){
    total = 0
    for (const num of args){
        total += num
    }
    return total
}
console.log(sumsUp(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20))

const randomUserIp = () =>{
    octants = Array()
    for (i=0; i<4; i++){
        octants.push(Math.floor(Math.random()*255))
    }
    return octants.join('.')
}
console.log(randomUserIp())

function randomMacAddress(){
    sextants = Array()
    for (i=0; i < 6; i++){
        sextants.push(Math.random().toString(16).substring(2,4).toUpperCase())
    }
    return sextants.join('-')
}
console.log(randomMacAddress())

const randomHexaNumberGenerator = () =>{
     return `${Math.random().toString(16).substring(2,8)}`
}
console.log(randomHexaNumberGenerator())

function userIdGenerator(){
    return Math.random().toString(36).substring(2,9)
}
console.log(userIdGenerator())

//LEVEL 3
function userIdGeneratorByUser(length, quantity){
    index = length + 2
    ids = Array()
    for (i=0; i < quantity; i++){
        ids.push(Math.random().toString(36).substring(2,index))
    }
    return ids.join('\n')
    
}
// let length = +prompt('Enter how long you want the ID(s) to be')
// let quantity = +prompt('How many IDs should be generated?')
// console.log(userIdGeneratorByUser(length, quantity))

const rgbColorGenerator = num =>{
    return `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
}
console.log(rgbColorGenerator())

const hexaColorGenerator = () =>{
    return `#${Math.random().toString(16).substring(2,8)}`
}

function arrayOfHexaColors(quantity){
    colors = Array()
    for (i=0; i<quantity; i++){
        colors.push(randomHexaNumberGenerator())
    }
    return colors
}
console.log(arrayOfHexaColors(5))

function arrayOfRgbColors(quantity){
    colors = Array()
    for (i=0; i<quantity;i++){
        colors.push(rgbColorGenerator())
    }
    return colors
}
console.log(arrayOfRgbColors(5))

const convertHexaToRgb = hexColor =>{
    let red = parseInt(hexColor.slice(0,2), 16)
    let green = parseInt(hexColor.slice(2,4), 16)
    let blue = parseInt(hexColor.slice(4,), 16)
    return `rgb(${red},${green},${blue})`
}
console.log(convertHexaToRgb(randomHexaNumberGenerator()))

function convertRgbToHexa(red, green, blue){
    segments = [red.toString(16).toUpperCase(), green.toString(16).toUpperCase(), blue.toString(16).toUpperCase()]
    return segments.join('') 
} 
console.log(convertRgbToHexa(123,224,15))

const generateColors = (type, quantity) =>{
    colors = Array()
    switch(true){
        case type == 'rgb':
            for (i=0 ; i < quantity; i++){
                colors.push(rgbColorGenerator())
            }
            break
        case type == 'hexa':
            for (i=0; i<quantity;i++){
                colors.push(hexaColorGenerator())
            }
            break
        default:
            return 'That is neither a Hexa nor an RGB color'
            break
    }
    return colors
}
console.log(generateColors('rgb',10))
console.log(generateColors('hexa',15))


const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array
  }

console.log(shuffleArray(testArray))

function factorial(num){
    if (num === 0){
        return 1
    } else {
        return num * factorial(num-1)
    }
}
console.log(factorial(10))

const isEmpty = thing =>{
    if (thing.length > 0){
        return true
    } else {
        return false
    }
}

let testArray2 = [1,2,3,4,5,'e']

function sumOfArrayItems(array){
    total = 0
    for (const item of array){
        if(typeof item != 'number'){
            console.log(`${item} is not a number and was not added`)
        } else {
            total += item
        }
    }
    return total
}

console.log(sumOfArrayItems(testArray2))

const average = array =>{
    sum = 0
    total = 0
    for (const item of array){
        if(typeof item != 'number'){
            console.log(`${item} is not a number and was not included`)
        } else {
            sum += item
            total += 1
        }
    }
    return sum / total
}

console.log(average(testArray2))

let testArray3 = ['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot','Tomato']
let testArray4 = ['Google', 'Facebook','Apple', 'Amazon']
function modifyArray(array){
    if(array.length < 5){
        return 'Not found'
    } else {
        newArray = [...array]
        newArray.splice(4,1, newArray[4].toUpperCase())
    }
    return newArray
}
console.log(modifyArray(testArray3))
console.log(modifyArray(testArray4))

const isPrime = num =>{
    if(num == 1 || num == 2){
        return true
    } else if (num % 2 == 0 || num % 3 == 0){
        return false
    } else {
        return true
    }
}
console.log(isPrime(17))
console.log(isPrime(16))

function isUnique(array){
    for (const item of array){
        if (array.indexOf(item) != array.lastIndexOf(item)){
            return false
        }
    }
    return true
}
console.log(isUnique(testArray3))
console.log(isUnique(testArray4))

const isSameDataType = array =>{
    dataType = (typeof array[0])
    for (const item of array){
        if (typeof item != dataType){
            return false
        }
    }
    return true
}
console.log(isSameDataType(testArray))
console.log(isSameDataType(testArray2))

function isValidVariable(str){
    if(str.match(/[~!@#%^&*()-=+/]/) ){
        return "Not Valid"
    }
    return "Valid"
}
console.log(isValidVariable('$choolIsCool'))
console.log(isValidVariable('bl@meMe'))

const sevenRandomNumbers = () =>{
    random_numbers = Array()
    for (i=0; i<7 ; i++){
        let unique = false
        number = Math.floor(Math.random()*10)
        while (unique == false){
            if(random_numbers.indexOf(number) != -1){
                number = Math.floor(Math.random()*10)
            } else {
                unique = true
            }
        }
        random_numbers.push(number)
    }
    return random_numbers
}
console.log(sevenRandomNumbers())

function reverseCountries(){
    copied_arry = [...countries]
    return reverseArray(copied_arry)
}

console.log(reverseCountries())