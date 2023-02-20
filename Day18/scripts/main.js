const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

//LEVEL 1
function getMyCountry(){
    fetch(countriesAPI)
        .then(response=> response.json())
        .then(data =>{
            const objects = Object.values(data)
            let myCountry = objects.filter((e)=>e.name == 'United States of America')[0]
            console.log(`Name: ${myCountry.name}`)
            console.log(`Capital: ${myCountry.capital}`)
            console.log(`Languages: ${myCountry.languages.reduce((a,b)=>a+=b.name + ' ', '')}`)
            console.log(`Population: ${myCountry.population}`)
            console.log(`Land Area: ${myCountry.area}`)
        })
        .catch(error => console.error(error))
}
getMyCountry()
//LEVEL 2

const getCatNames = async () =>{
    try{
        const response = await fetch(catsAPI)
        const cats = await response.json()
        console.log(cats.reduce((a, b)=>a += b.name+ ' ', ''))
    }catch {
        console.error(err)
    }
}
getCatNames()

//LEVEL 3

const getAvgCatWeight = async () =>{
    try{
        const response = await fetch(catsAPI)
        const cats = await response.json()
        minImpTotal = cats.reduce((a, b)=>{
            a += +b.weight.imperial.match(/^\d+/)
            return a
        }, 0)
        maxImpTotal = cats.reduce((a, b)=>{
            a += + b.weight.imperial.match(/\d+$/)
            return a
        }, 0)
        minMetTotal = cats.reduce((a, b)=>{
            a += +b.weight.metric.match(/^\d+/)
            return a
        }, 0)
        maxMetTotal = cats.reduce((a, b)=>{
            a += + b.weight.metric.match(/\d+$/)
            return a
        }, 0)
        console.log(`The average cat weight in pounds is: ${(minImpTotal/cats.length).toFixed(2)} to ${(maxImpTotal/cats.length).toFixed(2)} pounds\nThe average cat weight in kilograms is: ${(minMetTotal/cats.length).toFixed(2)} to ${(maxMetTotal/cats.length).toFixed(2)} kilograms`
        
        )
    }catch{
        console.error(err)
    }
}

getAvgCatWeight()
const getLargestCountries = () =>{
    fetch(countriesAPI)
        .then(response=>response.json())
        .then(data =>{
        console.log(
        data.sort((a, b)=>{
            if (a.area > b.area) return -1
            if (a.area < b.area) return 1
            return 0
        }).slice(0,10))
        })
}
getLargestCountries()

const getLanguageCount = async () =>{
    const response = await fetch(countriesAPI)
    const countries = await response.json()
    count = new Map()
    for (country of countries){
        for (language of country.languages){
            if (count.has(language.name)){
            count.get(language.name).count++
            }else{
            count.set(language.name, {'count': 1})
            }
            
        }
    }
    console.log(count)

}
getLanguageCount()