
hTag = document.getElementsByTagName('h1')[0]
hTag.style.fontSize ='80pt'
hTag.style.letterSpacing = '15px'

let titles = document.getElementById('titles')
titles.classList.add('titlesBox')

let currentTitleIndex = 0
function changeTitle(){
    titles.innerHTML =''
    emojiDiv = document.createElement('div')
    newDiv = document.createElement('div')

    emojiDiv.textContent = titlesData[currentTitleIndex][0]
    newDiv.textContent = titlesData[currentTitleIndex][1]
    
    newDiv.style.position = 'relative'
    emojiDiv.classList.add('flexDisplay')
    newDiv.classList.add('fadein', 'flexDisplay')
    titles.append(emojiDiv, newDiv)
    currentTitleIndex ++
    if (currentTitleIndex == titlesData.length){
        currentTitleIndex = 0
    }
}

changeTitle()
var intervalID = window.setInterval(changeTitle, 5000)


let challengesDiv = document.getElementById('challenges')
for(const challenge of challengesList){
    newDiv = document.createElement('div')
    newDiv.id = 'challenge'
    newDiv.textContent = challenge.toUpperCase()
    challengesDiv.append(newDiv)
}

let techDiv = document.getElementById('tech')
    techDiv.style.fontSize = '35pt'
let techsIndex = 0
function changeTech(){
    techDiv.innerHTML = ''
    newDiv = document.createElement('span')
    newDiv.textContent = techsList[techsIndex]
    newDiv.style.color = '#' + Math.floor(Math.random()*16777215).toString(16)
    newDiv.classList.add('fadein')
    techDiv.append(newDiv)
    techsIndex ++
    if(techsIndex == techsList.length){
        techsIndex = 0
    }
}
changeTech()
window.setInterval(changeTech, 5000)

