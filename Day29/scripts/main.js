console.log('sanity')
const output = '30 days of JavaScript 2023 Thomas Sullivan'
document.body.style.padding = '50px'
function getRandomFont(){
var fonts = ['Roboto', 'Open_Sans', 'Raleway'];
var rand = fonts[Math.floor(Math.random() * fonts.length)];
console.log(rand);
return rand
}

const drawWords=()=>{
    wordsDiv = document.createElement('div')
    wordsDiv.style.fontSize = '40px'
    wordsDiv.classList.add(getRandomFont())
    wordsDiv.classList.add('fadeIn')
    wordsDiv.id = 'words'
    for (const letter of output){
        newSpan = document.createElement('span')
        newSpan.textContent = letter
        newSpan.style.margin = '10px'
        newSpan.style.color = '#' + Math.floor(Math.random()*16777215).toString(16)
        wordsDiv.append(newSpan)
    }
    document.body.appendChild(wordsDiv)
}
drawWords()
window.setInterval(e=>{
    document.body.innerHTML = ''
    drawWords()
}, 6000)