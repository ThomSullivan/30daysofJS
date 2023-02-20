function dog(){
    let dogColor = 'Brown'
    function getColor(){
        return dogColor
    }
    return{
        getColor:getColor()
    }
}

const singleDog = dog()
console.log(singleDog.getColor)

//LEVEL 2
function outerFunction() {
    let count = 0;
    function addOne() {
        count++
        return count
    }
    function subtractOne(){
        count--
        return count
    }
    function getCount(){
        return count
    }

    return {
        addOne:addOne(),
        subtractOne:subtractOne(),
        getCount:getCount()
    }
}
const innerFunc = outerFunction()

console.log(innerFunc.addOne)
console.log(innerFunc.subtractOne)
console.log(innerFunc.getCount)

//LEVEL 3

function personAccount() {
    let firstname = 'Thom'
    let lastname = 'Smith'
    let expenses = [
        {'description':'Rent',amount:500},
        {'description':'Internet',amount:45},
        {'description':'cleaning',amount:55},
        {'description':'food',amount:180},
        {'description':'telescope stuff',amount:300}
      ]
     let incomes = [
        {'description':'contracts',amount:1500},
        {'description':'W2',amount:50000}
      ]
    function totalIncome (){
       return incomes.reduce((a,b)=> a + b.amount, 0)
    }
    function totalExpenses(){
      return expenses.reduce((a,b)=> a + b.amount, 0)
    }
    function accountInfo(){
      return `ACCOUNT INFO\nName: ${firstname} ${lastname}\nAccount Balance: ${totalIncome() - totalExpenses()}`
    }
    
      return {
        totalIncome:totalIncome(),
        totalExpenses:totalExpenses(),
        accountInfo:accountInfo()
      }
  }
  
 const singleAccount = personAccount()

console.log(singleAccount.totalIncome)
console.log(singleAccount.totalExpenses)
console.log(singleAccount.accountInfo)