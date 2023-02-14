// LEVEL 1
console.group('Array')
console.table(countries.slice(0,10))
console.groupEnd()

console.group('Objects')
for (const country of countries.slice(0,11)){
    console.table(country)
}
console.groupEnd()

//LEVEL 2

console.assert(10 > 2 * 10)

console.warn('I\'ve got a bad feeling about this')

console.error("It's a Trap!")

//LEVEL 3
targetNum = 100000000

console.time('While loop')
let counter = 0
while (counter < targetNum){
    counter++
}
console.log(counter)
console.timeEnd("While loop")
counter = 0

console.time('for loop')
for (i=0; i<targetNum;i++){
    counter++
}
console.log(counter)
console.timeEnd('for loop')
counter = 0

const numArray = [...Array(targetNum).keys()]

console.time('for of loop')
for (const i of numArray){
    counter++
}
console.log(counter)
console.timeEnd('for of loop')
counter = 0

console.time('for each loop')
numArray.forEach((e)=>{
    counter++
})
console.log(counter)
console.timeEnd('for each loop')
