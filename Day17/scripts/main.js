// LEVEL 1

localStorage.setItem('firstname', 'Thom')
localStorage.setItem('lastname', 'Smith')
localStorage.setItem('age', '35')
localStorage.setItem('country', 'USA')
localStorage.setItem('city', 'Chicago')

//LEVEL 2

const student = {
    firstName : 'Thom',
    lastName : 'Smith',
    age: 35,
    skills :[
        'Python',
        'Django',
        'HTML',
        'CSS',
        'Javascipt'
    ]
}

let studentJSON = JSON.stringify(student)
localStorage.setItem('student', studentJSON)
console.log(localStorage)

//LEVEL 3

const personAccount = {
    firstname: 'Thom',
    lastname : 'Smith',
    totalIncome : function(){
       return this.incomes.reduce((a,b)=> a + b.amount, 0)
    },
    totalExpenses : function(){
      return this.expenses.reduce((a,b)=> a + b.amount, 0)
    },
    accountInfo : function(){
      console.log(`ACCOUNT INFO\nName: ${this.firstname} ${this.lastname}\nAccount Balance: ${this.totalIncome() - this.totalExpenses()}`)
    },
    expenses : [
        {'description':'Rent',amount:500},
        {'description':'Internet',amount:45},
        {'description':'cleaning',amount:55},
        {'description':'food',amount:180},
        {'description':'telescope stuff',amount:300}
      ],
      incomes : [
        {'description':'contracts',amount:1500},
        {'description':'W2',amount:50000}
      ]
  }
  
console.log(personAccount.totalIncome())
console.log(personAccount.totalExpenses())
console.log(personAccount.accountInfo())
