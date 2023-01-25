//LEVEL 1
let dog = {}

console.log(dog)

dog.name = 'Champion'
dog.legs = 3
dog.color = 'White and Black'
dog.age = 5
dog.bark = function(){
    return 'woof woof!'
}

console.log(Object.values(dog))
console.log(dog.bark())

dog.breed = 'mutt'
dog.getDogInfo = function(){
    return `${this.name} is a ${this.age} year old ${this.color} ${this.breed}\n${this.name} says ${this.bark()}`
}
console.log(dog.getDogInfo())

//LEVEL 2

let skillCount = 0
let mostSkilledPerson = undefined
for (const user of Object.entries(users)){
    if(user[1].skills.length < skillCount){
        continue
    }
    skillCount = user[1].skills.length
    mostSkilledPerson = user[0]
}
console.log(`${mostSkilledPerson} has the most skills at ${skillCount} skills.`)

let loggedInUsers = 0
let highScoreUsers = 0
for (const user of Object.entries(users)){
    if(user[1].isLoggedIn == true){
        loggedInUsers += 1
    }
    if(user[1].points >= 50){
        highScoreUsers += 1
    }
}
console.log(`${loggedInUsers} users are logged in.`)
console.log(`${highScoreUsers} users have 50 or more points.`)

const mernStack = ['MongoDB', 'Express', 'React', 'Node']
let MERNUsers = Array()
for(const user of Object.entries(users)){
    for(const skill of user[1].skills){
        if(mernStack.indexOf(skill)!= -1){
            MERNUsers.push(user[0])
            break
        }
    }
}
console.log(MERNUsers)

let copyUsers = Object.assign({}, users)
copyUsers.Thom = {
    email : 'Thom@thom.com',
    skills : ['HTML','CSS','JavaScript','Django','Python'],
    age : 35,
    isLoggedIn : true,
    points : 42
}
console.log(copyUsers)

console.log(Object.keys(users))
console.log(Object.values(users))

let country = countries[Math.floor(Math.random()*250)]
console.log(`${country.name}\nCapital: ${country.capital}\nPopulation: ${country.population}\nLanguages: ${country.languages}`)

//LEVEL 3

const personAccount = {
    firstName : 'John',
    lastName : 'Smith',
    incomes : {
                work:35000,
                contracts:15000
              },
    expenses : {
                rent:15000,
                food:5000,
                phone:500
                },
    totalIncome: function(){
                    return Object.values(this.incomes).reduce((partialSum, a) => partialSum + a, 0)
                },
    totalExpenses: function(){
                    return Object.values(this.expenses).reduce((partialSum, a) => partialSum + a, 0)
                },
    accountBalance: function(){
                    return (this.totalIncome() - this.totalExpenses())
                },
    accountInfo: function(){
                    return `Account holder: ${this.firstName} ${this.lastName}\nBalance: ${this.accountBalance()}`
                }
}
console.log(personAccount.accountInfo())

function userIdGenerator(){
    return Math.random().toString(36).substring(2,9)
}
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
    return `${month+1}/${date}/${year} ${readableHours}:${readableMinutes}`
}

const signUp = (username, email, password) => {
    console.log(levelThreeUsers)
    levelThreeUsers.push({
        _id: userIdGenerator(),
        username : username,
        email : email,
        password : password,
        createdAt : showDateTime(),
        isLoggedIn : false

    })
}

signUp('Thom','Thom@thom.com','password')
console.log(Object.values(levelThreeUsers))

function signIn(username, password){
    
    var result = levelThreeUsers.find(item => item.username === username)
    if (typeof result == 'undefined'){
        return 'Unknown login or password'
    } else if (result.password === password){
        return `${username} logged in successfully`
    } else {
    return 'Unknown login or password'
    }
}   
console.log(signIn('Asa','123111'))
console.log(signIn('Asab','123111'))
console.log(signIn('Asab','123456'))

const rateProduct = (productId, user_id, rating) =>{
    var prodObj = products.find(item => item._id === productId)
    if (typeof prodObj == 'undefined'){
        return 'product not found'
    }
    var rateInfo = {
        userId : user_id,
        rate : rating
    }
    prodObj.ratings.push(rateInfo)
    return
}   
console.log(products[0])
rateProduct('eedfcf','ab12ex',4.2)
console.log(products[0])

function averageRating(productId){
    var prodObj = products.find(item => item._id === productId)
    if (typeof prodObj == 'undefined'){
        return 'product not found'
    }
    total = 0 
    for (rating of prodObj.ratings){
        total += rating.rate
    }
    return `The average rating for ${prodObj.name} is ${(total / prodObj.ratings.length).toFixed(2)}`
}
console.log(averageRating('eedfcf'))

const likeProduct = (product_id, user_id) =>{
    var prodObj = products.find(item => item._id === product_id)
    if (typeof prodObj == 'undefined'){
        return 'product not found'
    }
    var likeIndex = prodObj.likes.indexOf(user_id)
    if (likeIndex != -1 ){
        prodObj.likes.splice(likeIndex,1)
        return 'product un-liked'
    } else {
        prodObj.likes.push(user_id)
        return 'product liked!'
    }
}

console.log(products[0])
likeProduct('eedfcf','ab12ex')
console.log(products[0])
