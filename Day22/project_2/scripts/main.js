
window.onload = () =>{
    let countDiv = document.createElement('div')
    countDiv.textContent =`Total Number of Countries: ${countries.length}`
    countDiv.style.display = 'flex'
    countDiv.style.justifyContent = 'center'
    countDiv.style.fontSize = '25pt'
    countDiv.style.fontWeight ='900'
    document.body.appendChild(countDiv)
    for(const country of countries){
        let newDiv = document.createElement('div')
        newDiv.textContent = country
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
        
        document.body.appendChild(newDiv)
    }
}