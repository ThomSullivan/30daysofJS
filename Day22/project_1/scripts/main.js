console.log('sanity check')

window.onload = () =>{
    for (let i = 0; i <= 10000; i++){
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
    
    document.body.appendChild(newDiv)
    
    }
}