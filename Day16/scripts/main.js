// LEVEL 1

let JSONSkills = JSON.stringify(skills,undefined,1)
console.log(JSONSkills)

let JSONAge = JSON.stringify(student.age,undefined,1)
console.log(JSONAge)

let JSONMarried = JSON.stringify(student.isMarried,undefined,1)
console.log(JSONMarried)

let JSONStudent = JSON.stringify(student,undefined,1)
console.log(JSONStudent)

// LEVEL 2

let filteredStudent = JSON.stringify(student,['firstName', 'lastName', 'skills'],1)
console.log(filteredStudent)

// LEVEL 3

const parsedTxt = JSON.parse(txt, undefined, 4)
let theKeys= Object.keys(parsedTxt)
let mostSkills = 0
let skilledPerson = undefined
theKeys.forEach((key)=>{
    if (parsedTxt[key].skills.length > mostSkills){
        mostSkills = parsedTxt[key].skills.length
        skilledPerson = key
    }
})

console.log(`${skilledPerson} is the most skilled, and has ${mostSkills} skills.`)