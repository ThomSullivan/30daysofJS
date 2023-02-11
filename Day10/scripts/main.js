//LEVEL 1

const emptySet = new Set()

let intSet = new Set()
for (i=0;i<=10;i++){
    intSet.add(i)
}
console.log(intSet)

intSet.delete(5)
console.log(intSet)

intSet.clear()
console.log(intSet)

let stringArray = [
    'Marvin the Robot',
    'Zaphod Beeblebrox',
    'Arthur Dent',
    'Ford Prefect',
    'Trillian'
]

let stringSet = new Set(stringArray)
console.log(stringSet)

const countries1 = ['Finland', 'Sweeden', 'Norway']
const countryMap = new Map()
for (const country of countries1){
    countryMap.set(country, country.length) 
}
console.log(countryMap)

//LEVEL 2

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const unionArray = [...a,...b]
unionSet = new Set(unionArray)
console.log(unionSet)
let setA = new Set(a)
let setB = new Set(b)

let c = new Set(a.filter((num)=>setB.has(num)))
console.log(c)
 c = new Set(a.filter((num)=>!setB.has(num)))
 console.log(c)

 //Level 3
function countLanguages(){
    langCount = new Set()
    for (const country of countries){
        for(const language of country.languages){
            langCount.add(language)
        }
    }
    return langCount.size
}

console.log(countLanguages())

//LEVEL 3

const mostSpokenLanguages = count =>{
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

console.log(mostSpokenLanguages(10))