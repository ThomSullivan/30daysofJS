console.log('sanity')

selector = document.getElementById('countries')
for (const country of countriesList){
    newEl = document.createElement('option')
    newEl.value = country
    newEl.textContent = country
    
    selector.append(newEl)
}

function validateForm() {
    let firstName = document.forms["myForm"]["firstName"].value;
    let lastName = document.forms['myForm']['lastName'].value
    let countrySelection = document.forms['myForm']['countries'].value
    let points = document.forms['myForm']['points'].value
    let errors = Array()

    if (firstName == "") {
      errors.push("First Name must be filled out");
    }
    if (lastName == "") {
        errors.push("Last Name must be filled out");
      }
    if(countrySelection == 'default'){
        errors.push('Select a country')
    }
    if(isNaN(+points) == true || points == '' || points < 0){
        errors.push('Enter a valid number')
    }
    return errors
  } 

function createRanking(firstName, lastName, country, points){
    newRanking = document.createElement('tr')
    newRanking.classList.add('ranking')

    firstTd = document.createElement('td')
        firstNameTr = document.createElement('tr')
        dateTr = document.createElement('tr')
        firstNameTr.textContent = `${firstName} ${lastName}`
        dateTr.textContent = new Date().toLocaleDateString()
        firstTd.append(firstNameTr, dateTr)
    //lastNameTd = document.createElement('td')
    countryTd = document.createElement('td')
    pointsTd = document.createElement('td')

    
    
    //lastNameTd.textContent = lastName
    countryTd.textContent = country
    pointsTd.textContent = points
    newRanking.append(firstTd, countryTd, pointsTd)

    deleteButton = document.createElement('button')
    addButton = document.createElement('button')
    subtractButton = document.createElement('button')

    deleteButton.type = 'button'
    deleteButton.classList.add('delete-button')
    
    addButton.type = 'button'
    addButton.textContent = '+5'
    subtractButton.type = 'button'
    subtractButton.textContent = '-5'

    deleteButton.addEventListener('click', e=>{
        e.originalTarget.parentElement.remove()
    })

    addButton.addEventListener('click',e=>{
        e.originalTarget.parentElement.children[2].innerText = +e.originalTarget.parentElement.children[2].innerText + 5
    })
    subtractButton.addEventListener('click',e=>{
        e.originalTarget.parentElement.children[2].innerText = +e.originalTarget.parentElement.children[2].innerText - 5
        if(+e.originalTarget.parentElement.children[2].innerText < 0){
            e.originalTarget.parentElement.children[2].innerText = 0
        }
    })
    

    newRanking.append(deleteButton, addButton, subtractButton)
    leaderboardTag.append(newRanking)
}

errorTag = document.getElementById('errors')
leaderboardTag = document.getElementById('leaderboard')


button = document.getElementsByTagName('button')[0]
button.addEventListener('click', e=>{
    errorTag.innerHTML = ''
    errors = validateForm()
    if(errors.length != 0){
        for(const error of errors){
            newError = document.createElement('li')
            newError.textContent = error
            errorTag.append(newError)
        }
    } else {
    form = document.getElementsByTagName('form')[0]
    entry = Array()
    for (const input of form){
        entry.push(input.value)
    }
    createRanking(entry[0],entry[1],entry[2],entry[3])
    }
})
