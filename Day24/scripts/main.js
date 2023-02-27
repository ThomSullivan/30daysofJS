document.body.style.backgroundImage = 'url("./images/galaxy.gif")'
document.body.style.textAlign = 'center'
document.body.style.color = 'white'
buttonPressed = false
weightMultipliers ={
    mercury : 0.38,
    venus : 0.91,
    earth : 1,
    mars : 0.38,
    jupiter : 2.34,
    saturn : 1.06,
    uranus : 0.92,
    neptune : 1.19,
    moon : 0.16

}

planets = document.querySelector('select')
planets.addEventListener('change', e =>{
    if (planets.value == 'none'){
        
    } else {
    image = document.querySelector('img')
    image.src = `./images/${planets.value}.png`
    userWeight = document.querySelector('input').value
    if (userWeight != 'undefined' && !isNaN(+userWeight) && +userWeight > 0 && buttonPressed==true){
        dataArea = document.getElementById('result')
        dataArea.textContent = `On ${planets.value.toUpperCase()} you would weigh ${(userWeight * weightMultipliers[planets.value]).toFixed(2)}`
    }
    }
})

button = document.querySelector('button')
button.addEventListener('click', e =>{
    if(planets.value == 'none'){

    }else{
    userWeight = document.querySelector('input').value
    dataArea = document.getElementById('result')
    dataArea.style.verticalAlign = 'middle'
    dataArea.style.display = 'inline-block'
    dataArea.style.padding = '40px'
    dataArea.style.borderStyle = 'solid'
    dataArea.style.width = 'fit-content'
    dataArea.style.backgroundColor = 'rgba(55, 55, 55, 0.5)'
    buttonPressed = true
    if (isNaN(+userWeight) || +userWeight == 0){
        dataArea.textContent = 'A weight is required'
    } else {
        dataArea.textContent = `On ${planets.value.toUpperCase()} you would weigh ${(userWeight * weightMultipliers[planets.value]).toFixed(2)}`
    }
    planetBox.append(dataArea)
    }
})


planetBox = document.getElementById('planetBox')
planetBox.style.borderStyle = 'solid'
planetBox.style.width = '50%'
planetBox.style.margin = 'auto'
planetBox.style.backgroundColor = 'rgba(201, 198, 197, 0.5)'