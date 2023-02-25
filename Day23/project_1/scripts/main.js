const generateNumbers = amount =>{
    for (let i = 0; i <= amount; i++){
        let newDiv = document.createElement('div')
        if (i == 2 || i == 3 || i == 5 || i == 7){
            newDiv.style.backgroundColor = 'red'
        }else if (i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i % 7 != 0){
            newDiv.style.backgroundColor = 'red'
        } else if (i % 2 == 0){
            newDiv.style.backgroundColor = 'green'
        } else {
            newDiv.style.backgroundColor = '#e0e99f'
    
        }
        newDiv.textContent = i
        newDiv.style.display = 'inline-block'
        newDiv.style.width = '100px'
        newDiv.style.height = '50px'
        newDiv.style.textAlign = 'center'
        newDiv.style.lineHeight = '150%'
        newDiv.style.fontSize = '24pt'
        newDiv.style.color = 'white'
        newDiv.style.margin = '4px'
        numberDiv.append(newDiv)
        }
}

window.onload = () =>{
    document.body.append(document.createElement('p'))
    messageP = document.querySelector('p')
    messageP.style.display = 'flex'
    messageP.style.justifyContent ='center'

    formDiv = document.createElement('div')
        formDiv.style.display = 'flex'
        formDiv.style.justifyContent = 'center'
        amount = document.createElement('input')
        amount.id = 'amount'
        amount.placeholder ='Enter a number'
        formDiv.append(amount)
        button = document.createElement('button')
        button.id = 'generate'
        button.textContent = 'Generate'
        formDiv.append(button)
    document.body.append(formDiv)

    numberDiv = document.createElement('div')
        numberDiv.style.margin = '15px'
    document.body.appendChild(numberDiv)

    amount = document.getElementById('amount')
    amount.addEventListener('input', ()=>{
        val = +amount.value
        if (isNaN(val)){
            messageP.textContent = 'Enter a number'
            messageP.style.color = 'red'
        } else {
            messageP.innerHTML = ''
        }
    })

    button = document.getElementById('generate')
    button.addEventListener('click', () =>{
        numberDiv.innerHTML = ''
        generateNumbers(+amount.value)
    })
}

