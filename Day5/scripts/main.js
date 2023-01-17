// LEVEL 1

let emptyArray = Array()

let newArray = [1,2,3,4,5,6,7]

console.log(newArray.length)

console.log(
    newArray[0], 
    newArray[Math.floor(newArray.length/2)], 
    newArray[newArray.length-1]
)

let mixedDataTypes = [
    'String',
    10,
    {'object':'object'},
    ['Array', 'in','an','array'],
    1.21
]

let itCompanies = [
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'IBM',
    'Oracle',
    'Amazon'
]
console.log(itCompanies)
console.log(itCompanies.length)

console.log(
    itCompanies[0], 
    itCompanies[Math.floor(itCompanies.length/2)], 
    itCompanies[itCompanies.length-1]
)

for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i]);
    }

for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i].toUpperCase());
    }

console.log(`${itCompanies.join()} are big IT companies`)

itCompanies.includes('Netflix') ? console.log('company found') : console.log('company not found')

let newItCompanies = Array()
for (let i = 0; i < itCompanies.length; i++){
    itCompanies[i].includes('oo') ? console.log(`${itCompanies[i]} filtered`) : newItCompanies.push(itCompanies[i])
}
console.log(newItCompanies)

console.log(newItCompanies.sort())

console.log(newItCompanies.reverse())

console.log(newItCompanies.slice(0,3))

console.log(newItCompanies.slice(2,))

console.log(newItCompanies.slice(2,3))

newItCompanies.shift()
newItCompanies.pop()

// LEVEL 2

console.log(countries)
console.log(webTechs)

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(text.split(' ').length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.includes('Meat') ? null : shoppingCart.unshift('Meat')
shoppingCart.includes('Sugar') ? null : shoppingCart.push('Sugar')
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea'
console.log(shoppingCart)

if (countries.indexOf('Ethiopia')>=0){
    console.log(countries[countries.indexOf('Ethiopia')].toUpperCase())
} else {
    countries.push('Ethiopia')
}

webTechs.includes('Sass') ? console.log('Sass is a Css preprocess') : webTechs.push('Sass'), console.log(webTechs)

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
let fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

// LEVEL 3 

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24, 50]
ages.sort()
console.log(
    `${ages[0]} is the minimum ${ages[ages.length-1]} is the maximum`
)
let median = 0
if (ages.length % 2 != 0){
    median = ages[Math.floor(ages.length/2)]
} else {
    median = (ages[Math.floor(ages.length/2)] + ages[Math.floor(ages.length/2) - 1]) / 2
}
console.log(`The median age is ${median}`)

let average = (ages.reduce(function (a, b) {return a + b;}, 0) / ages.length).toFixed(2)
console.log(`${average} is the average age`)

let range = ages[ages.length-1] - ages[0]
console.log(`${range} is the range of ages`)