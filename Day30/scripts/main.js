function drawPopulationGraph(){
    document.getElementById('stat').innerHTML = ''
    const data = [{
        type: 'bar',
        x: [],
        y: [],
        orientation: 'h'
      }];
    for (const entry of getMostPopulated(10)){
        data[0].x.unshift(entry.population)
        data[0].y.unshift(entry.name)
    } 
    var layout = {
        title: 'Populations',
        yaxis: {
          automargin: true
        }
      };
    Plotly.newPlot('stat', data, layout);
}

function drawLanguagesGraph(){
    document.getElementById('stat').innerHTML = ''
    const data = [{
        type: 'bar',
        x: [],
        y: [],
        orientation: 'h'
      }];
    for (const entry of getLanguageCount(10)){
        data[0].x.unshift(entry.count)
        data[0].y.unshift(entry.language)
    } 
    var layout = {
        title: 'Most Spoken Languages',
        yaxis: {
          automargin: true
        }
      };
    Plotly.newPlot('stat', data, layout);
}

function getSearchValue(){
    let searchValue = document.getElementById('searchValue')
    result = countries.filter(e => e.name.toLowerCase().includes(searchValue.value.toLowerCase()))
    return result
}

function drawCountries(data){
    countryDiv.innerHTML = ''
    for(const country of data){
        let newDiv = document.createElement('div')
        newDiv.style.borderStyle = 'solid'
        newDiv.style.display = 'inline-block'
        newDiv.style.width = '200px'
        newDiv.style.height = '200px'
        newDiv.style.margin = '5px'
        newDiv.style.verticalAlign = 'top'

        imageDiv = document.createElement('div')
        imageDiv.style.width ='150px'
        imageDiv.style.height  = '100px'
        imageDiv.style.display = 'block'
        imageDiv.style.marginTop = '5px'
        imageDiv.style.marginLeft = 'auto'
        imageDiv.style.marginRight = 'auto'
        flagTag = document.createElement('img')
        flagTag.src = country.flag
        imageDiv.append(flagTag)
        flagTag.style.width = '100%'
        flagTag.style.height ='100%'
        newDiv.append(imageDiv)

        nameDiv = document.createElement('div')
        nameDiv.textContent =country.name
        nameDiv.style.display = 'block'
        nameDiv.style.width = 'fit-content'
        nameDiv.style.marginLeft = 'auto'
        nameDiv.style.marginRight = 'auto'
        newDiv.append(nameDiv)

        populationDiv = document.createElement('div')
        populationDiv.textContent = country.population
        populationDiv.style.display = 'block'
        populationDiv.style.width = 'fit-content'
        populationDiv.style.marginLeft = 'auto'
        populationDiv.style.marginRight = 'auto'
        newDiv.append(populationDiv)

        countryDiv.append(newDiv)
    }
}


const getLanguageCount = (num) =>{
    count = Array()
    for (country of getSearchValue()){
        for (language of country.languages){
           let languageIndex = count.findIndex((e)=> e.language.includes(language))
           if (languageIndex === -1){
            obj = {'language' : language, count : 1}
            count.push(obj)
           } else {
            count[languageIndex].count ++
           }
        }
    }
    return count.sort((a,b) =>{
        if (a.count > b.count) return -1
        if (a.count < b.count) return 1
        return 0
    }).slice(0,num)
    
}

const getMostPopulated = (num) =>{
    result = getSearchValue().sort((a,b) =>{
        if (a.population > b.population) return -1
        if (a.population < b.population) return 1
        return 0
    })
    if(num == 0){
        return result    
    }
    if (num == -1){
        return getSearchValue().sort((a,b) =>{
            if (a.population > b.population) return 1
            if (a.population < b.population) return -1
            return 0
    })}
    return result.slice(0,num)
}

document.body.style.textAlign = 'center'
let countryDiv = document.getElementById('countries')
let searchButton = document.getElementById('search')

langButton = document.getElementById('languages')
langButton.addEventListener('click', e=>drawLanguagesGraph())

popButton = document.getElementById('population')
popButton.addEventListener('click', e=>drawPopulationGraph())

popSortDescButton = document.getElementById('popSortDesc')
popSortDescButton.addEventListener('click', e=> drawCountries(getMostPopulated(0)))

popSortAscButton = document.getElementById('popSortAsc')
popSortAscButton.addEventListener('click', e=>drawCountries(getMostPopulated(-1)))

alphaSortDesc = document.getElementById('alphaSortDesc')
alphaSortDesc.addEventListener('click', e => drawCountries(getSearchValue().reverse()))

alphaSortAsc = document.getElementById('alphaSortAsc')
alphaSortAsc.addEventListener('click', e=> drawCountries(getSearchValue()))

searchButton.addEventListener('click', e =>{
    drawCountries(getSearchValue())
    drawPopulationGraph()
})

window.onload = () =>{
    drawCountries(countries)
    drawPopulationGraph()
}