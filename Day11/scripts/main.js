const constants = [2.72, 3.14, 9.81, 37, 100]
const countries1 = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

// LEVEL 1

let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp)

let [fin, est, sw, den, nor] = countries1
console.log(fin, est, sw, den, nor)

let {width, height, area, perimeter} = rectangle
console.log(width, height, area, perimeter)

//LEVEL 2

for (const {name, scores, skills, age} of users){
    console.log(name, scores, skills, age)
}

const findLessThanTwo = () =>{
    count = 0 
    for (const {skills} of users){
        if (skills.length < 2){
            count += 1
        }
    }
    return `There are ${count} people with less than two skills`
}
console.log(findLessThanTwo())

//LEVEL 3

for  (const {name, capital, population, languages} of countries){
    console.log(name, capital, population, languages)
} 
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]


    
let [name, skills, [htmScore,cssScore, jsScore, reactScore] = scores] = student

console.log(name, skills,htmScore,cssScore, jsScore, reactScore)



const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

function convertArrayToObject(arr){
    result = Array()
    for ([name, skills, scores] of students){
        obj = {
            name : name,
            skills : skills,
            scores : scores
        }
        result.push(obj)
    }
    return result
}

console.log(convertArrayToObject(students))

const student1 = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }
console.log(student1)

let newSkill = {skill:'Bootstrap', level:8}
const newStudent = (obj) =>{
    const result = JSON.parse(JSON.stringify(obj))
    result.skills.backEnd.push({skill:'Express', level:9})
    result.skills.frontEnd.push({skill:'Bootstrap', level:8})
    result.skills.dataBase.push({skill:'SQL', level:8})
    result.skills.dataScience.push('SQL')
    return result
} 

console.log(newStudent(student1))