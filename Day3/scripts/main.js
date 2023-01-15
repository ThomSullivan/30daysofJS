// this is your main.js script
// LEVEL 1
let firstName = 'Thomas'
let lastName = 'Smith'
let isMarried = false
let country = 'United States'
let city = 'Chicago'
let age = 25
console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof isMarried)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)

console.log(typeof '10' == 10)

console.log(typeof parseInt('9.8') == 10)

console.log( 100 > 42)
console.log( '10' == 10)
console.log( 1 === 1)

console.log( 100 < 42)
console.log( '10' === 10)
console.log( 1 === 10)

console.log(4 > 3) //True
console.log(4 >= 3) //True
console.log(4 < 3) //False
console.log(4 <= 3) //False
console.log(4 == 4) //True
console.log(4 === 4) //True
console.log(4 != 4) //False
console.log(4 !== 4) //False
console.log(4 != '4') //False
console.log(4 == '4') //True
console.log(4 === '4') //False
console.log('python'.length != 'jargon'.length) //False

console.log(4 > 3 && 10 < 12) //True
console.log(4 > 3 && 10 > 12) //False
console.log(4 > 3 || 10 < 12) //True
console.log(4 > 3 || 10 > 12) //True
console.log(!(4 > 3)) //False
console.log(!(4 < 3)) //True
console.log(!(false)) //True
console.log(!(4 > 3 && 10 < 12)) //False
console.log(!(4 > 3 && 10 > 12)) //True
console.log(!(4 === '4')) //True
console.log(!('dragon'.includes('on') && 'python'.includes('on')))

const now = new Date()
const year = now.getFullYear()
const month = now.getMonth()
const date = now.getDate()
const day = now.getDay()
const hours = now.getHours()
const minutes = now.getMinutes()
const secondsSince = Date.now()
console.log(`${month+1}/${date}/${year} ${hours}:${minutes}`) //Sorry I am American.
console.log(secondsSince)

// LEVEL 2

let base = prompt('Enter base length')
let height = prompt('Enter a height length')
console.log(`${0.5 * base * height} is the area of that triangle`)

let sideA = prompt('Enter the legnth of side A')
let sideB = prompt('Enter the legnth of side B')
let sideC = prompt('Enter the legnth of side C')
console.log(`${+sideA + +sideB + +sideC} is the perimeter of that triangle`)

let length = prompt('Enter length of rectangle')
let width = prompt('Enter width of a rectangle')
console.log(`${length * width} is the are and ${2*(length + width)} is the area of that rectangle`)

let radius = prompt('Enter radius of circle')
console.log(`${3.14 * radius * radius} is the area, ${2 * 3.14 * radius} is the circumfrance`)

console.log(`Y intercept: ${2 * 0 - 2} X intercept: ${(2 + 0) / 2} and the slope is 2`)
console.log(`Slope of a line through (2,2) and (6,10) is ${(10 - 2) / (6 - 2)}`)

let hour = prompt('Enter hours worked')
let rate = prompt('Enter pay rate')
console.log(`Your total pay is: ${hour * rate}`)

firstName.length > 7
    ? console.log('Your name is long')
    : console.log('Your name is short')

firstName.length == lastName.length
    ? console.log(`Your first name ${firstName} is equal length as your family name, ${lastName}`)
    : firstName.length > lastName.length
        ? console.log(`Your first name ${firstName} is longer than your family name, ${lastName}`)
        : console.log(`Your family name ${lastName} is longer than your first name, ${firstName}`)

let myAge = 250
let yourAge = 25
console.log(`I am ${myAge - yourAge} years older than you`)

let userBirthYear = prompt('Enter your four digit birthyear')
let userAge = year - userBirthYear
userAge >= 18
    ? console.log(`You are ${userAge}. You are old enough to drive`)
    : console.log(`You are ${userAge}. You will be allowed to drive after ${18 - userAge} years.`)

let userYears = prompt('Enter how many years old you are')
console.log(`You have lived ${31536000 * userYears} seconds.`)

console.log(`${year}-${month+1}-${date} ${hours}:${minutes}`)
console.log(`${date}-${month+1}-${year} ${hours}:${minutes}`)
console.log(`${date}/${month+1}/${year} ${hours}:${minutes}`)

// LEVEL 3

let readableHours = now.getHours()
readableHours = ("0" + readableHours).slice(-2)
let readableMinutes = now.getMinutes()
readableMinutes = ('0'+ readableMinutes).slice(-2)
console.log(`${year}-${month+1}-${date} ${readableHours}:${readableMinutes}`)
