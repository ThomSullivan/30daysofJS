// LEVEL 1
let incomeStr = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'

const incomePattern = /\d+/g
console.log(
    incomeStr.match(incomePattern).reduce((a, b)=> a + +b, 0)
)

const distancePattern = /-?\d+/g
let distanceStr ='The position of some particles on the horizontal x-axis -12, -4, -3 and  -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.'
let distanceArr = distanceStr.match(distancePattern).sort((a,b)=>{
    if (+a > +b) return -1
    if (+a < +b) return 1
    return 0
})

console.log(
    `The distance between the lowest point ${distanceArr[distanceArr.length-1]} and the highest point ${distanceArr[0]} is ${+distanceArr[0] - +distanceArr[distanceArr.length-1]}`
)

const jsPattern = /^[a-z][a-z0-9]*/gi

const variableNames = ['first_name', 'first-name','1first_name','firstname']

for (const variable of variableNames){
    console.log(variable, jsPattern.test(variable))
}

// LEVEL 2
const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
const mostFrequentWords = (paragraph, quantity)=>{
    let replaced = paragraph.replace(/\./gi, '') 
    values = Array()
    for(word of replaced.split(' ')){
        let wordIndex = values.findIndex((e)=> e.word.includes(word))
        if (wordIndex === -1){
            obj = {'word':word, count:1}
            values.push(obj)
        } else {
            values[wordIndex].count += 1
        }
    }
    return values.sort((a,b) =>{
        if (a.count > b.count) return -1
        if (a.count < b.count) return 1
        return 0
    }).slice(0,quantity)
    
}
    
console.log(mostFrequentWords(paragraph, 10))

// LEVEL 3

sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
cleanSentence = sentence.replace(/[%$@&#;,!?]/g, '')    

console.log(cleanSentence)

console.log(mostFrequentWords(cleanSentence))