// LEVEL 1
const countries1 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

const testArray = [1, 2, '42', 'Heart of Gold', 4.15, {key:"value"}]

const callback = (n)=>{
    console.log(n)
}

countries1.forEach(callback)
names.forEach(callback)
numbers.forEach(callback)

const upperCaseCountries = countries1.map((country)=>country.toUpperCase())
console.log (upperCaseCountries)

const countryLengths = countries1.map((country)=> country.length)
console.log(countryLengths)

const squareNumbers = numbers.map((number) => number * number)
console.log(squareNumbers)

const upperCaseNames = names.map((element) => element.toUpperCase())
console.log(upperCaseNames)

const landCountries = countries1.filter((country) => country.includes('Land'))
console.log(landCountries)

const sixCharCountries = countries1.filter((country) => country.length == 6)
console.log(sixCharCountries)

const sixOrMoreChars = countries1.filter((country) => country.length >= 6)
console.log(sixOrMoreChars)

const startsWithE = countries1.filter((country) => country.startsWith('E'))
console.log(startsWithE)

const onlyValues = products.filter((product) => product.price > 0)
console.log(onlyValues)

const getStringLists = array =>{
    return array.filter((element) => typeof element == 'string')
}
console.log(getStringLists(testArray))

const sumArray = numbers.reduce((total, number) => total + number, 0)
console.log(sumArray)

const conCatCountries = countries1.reduce((sentence, country, i) => {
                        if (i+1 != countries1.length) sentence += `${country}, `
                        if (i+1 == countries1.length) sentence += `and ${country} are north European countries.`
                        return sentence
                        }, '')
console.log(conCatCountries)

const areSomeStr = testArray.some((element)=> typeof element === 'string')
console.log(areSomeStr)

const sevenCharNames = names.some((e)=> e > 7)
console.log(sevenCharNames)

const allCountriesLand = countries1.every((e)=> e.includes('land'))
console.log(allCountriesLand)

const firstSixCharCountry = countries1.find((e)=> e.length >= 6)
console.log(firstSixCharCountry)

const firstSixCharIndex = countries1.findIndex((e)=> e.length >= 6)
console.log(firstSixCharIndex)

const findNorway = countries1.findIndex((e)=> e.includes('Norway'))
console.log(findNorway)

const findRussia = countries1.findIndex((e)=> e.includes('Russia'))
console.log(findRussia)

//LEVEL 2

const sumPrices = products.filter((e)=> e.price > 0).reduce((a, b)=> a + b.price, 0)
console.log(sumPrices)

const sumPrices2 = products.reduce((a, b)=>{
                    if (typeof b.price == 'number') a += b.price
                    return a
                    }, 0)                         
console.log(sumPrices2)

const categorizeCountries = () =>{
    return countries.filter((country)=> country.name.includes('land'))
}
console.log(categorizeCountries())

function letterCount(){
    let letters = Array()
    for (const country of countries){
        let firstLetter = country.name.slice(0,1)
        let letterIndex = letters.findIndex((e)=> e.letter.includes(firstLetter))
        if (letterIndex === -1){
            let obj = {letter : firstLetter, count : 1}
            letters.push(obj)
        } else {
            letters[letterIndex].count += 1
        }
    }
    return letters
}
console.log(letterCount())

const getFirstTenCountries = ()=>{
    return countries.splice(0,10)
}
console.log(getFirstTenCountries())
function getLastTenCountries(){
    return countries.splice(-10)
}
console.log(getLastTenCountries())

//LEVEL 3

const sortCountries = () =>{
    nameSort = countries.sort((a,b)=>{
        if (a.name < b.name) return -1
        if (a.name > b.name) return 1
        return 0
        })
    console.log(nameSort)
    capitalSort = countries.sort((a,b)=>{
        if (a.capital > b.capital) return 1
        if (a.capital < b.capital) return -1
        return 0
    })
    console.log(capitalSort)
    populationSort = countries.sort((a,b)=>{
        if (a.population > b.population) return 1
        if (a.population < b.population) return -1
        return 0
    })
    console.log(populationSort)
}
sortCountries()

const languageCount = count =>{
    let languagesCounter = Array()
    for (const country of countries){
        for (const language of country.languages){
            let langIndex = languagesCounter.findIndex((e)=> e.country.includes(language))
            if (langIndex === -1){
                let obj = {country:language,count:1}
                languagesCounter.push(obj)
            } else {
                languagesCounter[langIndex].count += 1
            }
        }
    }
    return languagesCounter.sort((a,b)=>{
                if (a.count > b.count) return -1
                if (a.count < b.count) return 1
                return 0
            }).slice(0, count)
}
console.log(languageCount(10))

function mostPopulatedCountries(quantity){
    popList = Array()
    populationSort = countries.sort((a,b)=>{
        if (a.population > b.population) return -1
        if (a.population < b.population) return 1
        return 0
    }).slice(0,quantity)
    for (const item of populationSort){
        let obj = {country:item.name, population:item.population}
        popList.push(obj)
    }
    return popList
}
console.log(mostPopulatedCountries(10))

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

const statistics = {
    count : function(arr){
        return arr.length
    },
    sum : function(arr){
        return arr.reduce((a,b)=>a+b, 0)
    },
    min : function(arr){
        return Math.min.apply(Math, arr)
    },
    max : function(arr){
        return Math.max.apply(Math, arr)
    },
    range : function(arr){
        return this.max(arr) - this.min(arr)
    },
    mean : function(arr){
        return this.sum(arr) / this.count(arr).toFixed(2)
    },
    median : function(arr){
        const mid = Math.floor(arr.length / 2),
        nums = [...arr].sort((a, b) => a - b);
        return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
    },
    mode : function(arr){
        modes = Array()
        for (const num of arr){
            let numIndex = modes.findIndex((e)=> e.number==(num)) 
            if (numIndex === -1){
                let obj = {number:num,count:1}
                modes.push(obj)
            } else {
                modes[numIndex].count += 1
            }
        }
        results =  modes.sort((a,b)=>{
            if (a.count>b.count) return -1
            if (a.count<b.count) return 1
            return 0
        })[0] 
        return `${results.number}, count: ${results.count}`
    },
    variance : function(arr){
        let mean = this.mean(arr)
        let deviations = Array()
        for (const num of arr){
            deviation = mean - num
            deviations.push(deviation)
        }
        squares = deviations.map((e)=> e * e)
        sumOfSquares = this.sum(squares)
        return (sumOfSquares / (arr.length)).toFixed(2)
    },
    std : function(arr){
        return Math.sqrt(this.variance(arr)).toFixed(2)
    }
}
console.log('Count: ', statistics.count(ages))
console.log('Sum: ', statistics.sum(ages))
console.log('Min: ', statistics.min(ages))
console.log('Max: ', statistics.max(ages))
console.log('Range: ', statistics.range(ages))
console.log('Mean: ', statistics.mean(ages))
console.log('Median: ', statistics.median(ages))
console.log('Mode: ', statistics.mode(ages))
console.log('Variance: ', statistics.variance(ages))
console.log('Standard Deviation', statistics.std(ages))