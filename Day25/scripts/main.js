const getLanguageCount = () =>{
    count = Array()
    for (country of countries_data){
        //console.log(country.languages)
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
    }).slice(0,10)
    
}

const getMostPopulated = () =>{
    return countries_data.sort((a,b) =>{
        if (a.population > b.population) return -1
        if (a.population < b.population) return 1
        return 0
    }).slice(0,10)
}
document.body.style.textAlign = 'center'

langButton = document.getElementsByClassName('languages')[0]
langButton.addEventListener('click', e=>{
    document.getElementById('stat').innerHTML = ''
    const data = [{
        type: 'bar',
        x: [],
        y: [],
        orientation: 'h'
      }];
    for (const entry of getLanguageCount()){
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
})

popButton = document.getElementsByClassName('population')[0]
popButton.addEventListener('click', e=>{
    document.getElementById('stat').innerHTML = ''
    const data = [{
        type: 'bar',
        x: [],
        y: [],
        orientation: 'h'
      }];
    for (const entry of getMostPopulated()){
        data[0].x.unshift(entry.population)
        data[0].y.unshift(entry.name)
    } 
    var layout = {
        title: 'Most populated Countries',
        yaxis: {
          automargin: true
        }
      };
    Plotly.newPlot('stat', data, layout);
})
