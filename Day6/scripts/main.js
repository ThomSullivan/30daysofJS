const countries = [
    
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Albania',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

//LEVEL 1

for ( let i = 0; i <= 10; i++){
    //console.log(i)
}

let i = 0

while (i <= 10){
    //console.log(i)
    i++
}
i=0

do{
    //console.log(i)
    i++
} while (i <= 10)
i = 10

for (let i = 10; i >= 0; i--){
    //console.log(i)
}

while(i >= 0){
    //console.log(i)
    i--
}
i = 10
do {
    //console.log(i)
    i--
} while (i>=0)

n=15
for (let i = 0; i <= n; i++){
    //console.log(i)
}

for (let i = 1; i<=7; i++){
    console.log('#'.repeat(i))
}

for (let i = 0; i <= 10; i++){
    console.log(`${i} x ${i} = ${i*i}`)
}

for (let i = 0; i <= 10; i++){
    if(i == 0){
        console.log('i   i^2  i^3')
    }
    console.log(`${i}   ${i*i}   ${i*i*i}`)
}

evenNumbers = Array()
for (i = 1; i <= 100; i++){
    if(i % 2 == 0){
        evenNumbers.push(i)
    }
}
console.log(evenNumbers)

oddNumbers = Array()
for (i = 1; i <= 100; i++){
    if(i % 2 != 0){
        oddNumbers.push(i)
    }
}
console.log(oddNumbers)

primeNumbers = Array()
for (i = 1; i <= 100; i++){
    if (i % 2 == 0 || i % 3 == 0){
        continue
    } else {
        primeNumbers.push(i)
    }
}
console.log(primeNumbers)

let total = 0
for (let i = 0; i <= 100; i++){
    total += i
}
console.log(`The sum of all numbers from 0 to 100 is ${total}`)

evenTotal = 0
for (const i of evenNumbers){
    evenTotal += i
}
console.log(`The sum of all even numbers from 0 to 100 is ${evenTotal}`)

oddTotal = 0
for (const i of oddNumbers){
    oddTotal += i
}
console.log(`The sum of all odd numbers from 0 to 100 is ${oddTotal}`)

let sums = [evenTotal, oddTotal]
console.log(sums)

randomNumbers = Array()
while(randomNumbers.length < 5){
    randomNumber = Math.floor(Math.random()*100)
    randomNumbers.push(randomNumber)
}
console.log(randomNumbers)

randomUniqueNumbers = Array()
while(randomUniqueNumbers.length < 5){
    randomNumber = Math.floor(Math.random()*100)
    if (randomUniqueNumbers.indexOf(randomNumber) == -1){
        randomUniqueNumbers.push(randomNumber)
    } 
}
console.log(randomUniqueNumbers)

//LEVEL 2

const result = Math.random().toString(36).substring(2,8);
console.log(result);

let length = 15
const anyLengthResult = Math.random().toString(36).substring(2,length);
console.log(anyLengthResult)

console.log(`#${Math.random().toString(16).substring(2,8)}`)

console.log(`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`)

let upperCountries = Array()
for (const country of countries){
    upperCountries.push(country.toUpperCase())
}
console.log(upperCountries)

let countryLengths = Array()
for (const country of countries){
    countryLengths.push(country.length)
}
console.log(countryLengths)

let countryInfo = Array()
for(const country of countries){
    singleCountryInfo = [country, country.slice(0,3).toUpperCase(), country.length]
    countryInfo.push(singleCountryInfo)
}
console.log(countryInfo)

let landCountries = Array()
for (const country of countries){
    if(country.includes('land')){
        landCountries.push(country)
    }
}
landCountries.length == 0
    ?console.log('All these countries are without land')
    :console.log(landCountries)

let endWithIa = Array()
for (const country of countries){
    if(country.endsWith('ia')){
        endWithIa.push(country)
    }
}
endWithIa.length == 0
    ?console.log('These countries do not end with \'ia\'')
    :console.log(endWithIa)

let longestInedex = 0
let longest = 0
for (const country of countries){
    if (country.length > longest){
        longest = country.length
        longestInedex = countries.indexOf(country)
    }   
}
console.log(countries[longestInedex])

let fiveChars = Array()
for (const country of countries){
    if (country.length == 5){
        fiveChars.push(country)
    }
}
console.log(fiveChars)

longestInedex = 0
longest = 0
for (const tech of webTechs){
    if (tech.length > longest){
        longest = tech.length
        longestInedex = webTechs.indexOf(tech)
    } 
}
console.log(webTechs[longestInedex])

let webTechInfo = Array()
for (const tech of webTechs){
    singleTechInfo = [tech, tech.length]
    webTechInfo.push(singleTechInfo)
}
console.log(webTechInfo)

let acronym = ''
for (const tech of mernStack){
    acronym += tech[0].toUpperCase()
}
console.log(acronym)

for(const tech of webTechs){
    console.log(tech)
}

let fruits = ['banana', 'orange', 'mango', 'lemon']
let reversedFruit = Array()
for(i = fruits.length-1; i >= 0; i--){
    reversedFruit.push(fruits[i])
}
console.log(reversedFruit)

for(const item of fullStack){
    for(const entry of item){
        console.log(entry)
    }
}

//LEVEL 3

let countriesCopy = [...countries]
countriesCopy.sort()
console.log(countries)
console.log(countriesCopy)

let landCountries1 = Array()
for (const country of countries1){
    if(country.includes('land')){
        landCountries1.push(country)
    }
}
console.log(landCountries1)

longestInedex = 0
longest = 0
for (const country of countries1){
    if (country.length > longest){
        longest = country.length
        longestInedex = countries1.indexOf(country)
    }   
}
console.log(countries1[longestInedex])

fourChars = Array()
for (const country of countries1){
    if (country.length == 4){
        fourChars.push(country)
    }
}
console.log(fourChars)

multiWordCountries = Array()
for (const country of countries1){
    if (country.split(' ').length > 1){
        multiWordCountries.push(country)
    }

}
console.log(multiWordCountries)

reversedAndCaps = Array()
for (i = countries1.length - 1; i >= 0; i--){
    reversedAndCaps.push(countries1[i].toUpperCase())
}
console.log(reversedAndCaps)