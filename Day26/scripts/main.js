let countryDiv = document.getElementById('countries')
countryDiv.style.margin = '0 10% 0 10%'
document.getElementById('top').style.backgroundImage = 'url("./images/globe-2.jpg")'
document.getElementById('top').style.backgroundSize = 'contain'
let countDiv = document.getElementById('count')
window.onload = () =>{
    
    countDiv.textContent =`Total Number of Countries: ${countries.length}`
    countDiv.style.display = 'flex'
    countDiv.style.justifyContent = 'center'
    countDiv.style.fontSize = '25pt'
    countDiv.style.fontWeight ='900'
    drawCountries(countries)
}

function drawCountries(countries){
    countryDiv.innerHTML = ''
    for(const country of countries){
        let newDiv = document.createElement('div')
        newDiv.textContent = country
        newDiv.style.backgroundImage = 'url("./images/map_image.jpg")'
        newDiv.style.backgroundSize = 'contain'
        newDiv.style.display = 'inline-flex'
        newDiv.style.width = '100px'
        newDiv.style.height = '100px'
        newDiv.style.verticalAlign = 'top'
        newDiv.style.textAlign = 'center'
        newDiv.style.justifyContent = 'center'
        newDiv.style.alignItems = 'center'
        newDiv.style.margin = '4px'
        newDiv.style.borderStyle = 'solid' 
        newDiv.style.borderColor = 'grey'
        newDiv.style.borderRadius = '5%'
        newDiv.style.boxShadow = '3px 3px lightgrey'
        newDiv.style.color = 'grey'
        newDiv.style.fontWeight = '1000'
        countryDiv.append(newDiv)
    }
}

searchDiv = document.getElementById('search')
searchDiv.addEventListener('input', e =>{
    result = countries.filter(e => e.toLowerCase().includes(searchDiv.value.toLowerCase()))
    if (searchDiv.value.length == 0){
        countDiv.textContent =`Total Number of Countries: ${countries.length}`
    } else if (result.length == 1){
        countDiv.textContent = `There is ${result.length} country that contains ${searchDiv.value}`
    } else {
        countDiv.textContent = `There are ${result.length} countries that contain ${searchDiv.value}`
    }
    drawCountries(result)
})