//LEVEL 1

class Animal {
  constructor(name, age, color, legs){
    this.name = name
    this.age = age
    this.color = color
    this.legs = legs
    this.satiation = 0
  }
  feedPet(){
    console.log(`${this.name} loves eating food.`)
    this.satiation ++
  }
  get getSatiation(){
    console.log(`${this.name}'s satiation level is ${this.satiation}`)
  }
  snugglePet(){
    console.log(`You snuggle ${this.name}. Now you have ${this.color} hair all over your shirt.`)
  }
}
let woola = new Animal('Woola', 200, 'green', 8)
woola.getSatiation
woola.feedPet()
woola.getSatiation
woola.snugglePet()

class Dog extends Animal{
  get bark(){
    console.log(`${this.name} says "Bark! Bark!"`)
  }
}
let laika = new Dog('Laika', 4, 'Grey', 4)
laika.snugglePet()
laika.bark

class Cat extends Animal{
  purr(){
    console.log(`${this.name} purrs at you lovingly`)
  }
}
let spot = new Cat('Spot', 6, 'Orange', 3)
spot.snugglePet()
spot.purr()

//LEVEL 2

class MeanCat extends Cat{
  snugglePet(){
    console.log(`${this.name} claws at you violently... What a mean cat!`)
  }
}
let meanCat = new MeanCat('Mr. Hoshino', 8, 'White', 4)
meanCat.purr()
meanCat.snugglePet()

//LEVEL 3

ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]


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
  frequency : function(arr){
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
      })
      return results
  },
  mode : function(arr){
    mode = this.frequency(arr)[0]
    return mode
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
console.log('Frequency: ', statistics.frequency(ages))
console.log('Variance: ', statistics.variance(ages))
console.log('Standard Deviation', statistics.std(ages))

class PersonAccount{
  constructor(firstname, lastname, incomes, expenses){
    this.firstname = firstname
    this.lastname = lastname
    this.incomes = incomes
    this.expenses = expenses
  }
  get totalIncome(){
     return this.incomes.reduce((a,b)=> a + b.amount, 0)
  }
  get totalExpenses(){
    return this.expenses.reduce((a,b)=> a + b.amount, 0)
  }
  get accountInfo(){
    console.log(`ACCOUNT INFO\nName: ${this.firstname} ${this.lastname}\nAccount Balance: ${this.totalIncome - this.totalExpenses}`)
  }
}

let incomes = [
  {'description':'contracts',amount:1500},
  {'description':'W2',amount:50000}
]
let expenses = [
  {'description':'Rent',amount:500},
  {'description':'Internet',amount:45},
  {'description':'cleaning',amount:55},
  {'description':'food',amount:180},
  {'description':'telescope stuff',amount:300}
]
let thom = new PersonAccount('Thom', 'Smith', incomes, expenses)
console.log(thom.totalIncome)
console.log(thom.totalExpenses)
thom.accountInfo