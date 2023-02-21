//LEVEL 1

console.log(document.querySelector('p'))

console.log(document.querySelector('#first'))
console.log(document.querySelector('#second'))
console.log(document.querySelector('#third'))
console.log(document.querySelector('#fourth'))

console.log(document.querySelectorAll('p'))

const allPTags = document.querySelectorAll('p')
allPTags.forEach((p)=>console.log(p.textContent))

document.querySelector('#fourth').textContent = 'Fourth Paragraph'

const firstPar = document.querySelector('#first') 
firstPar.id='1st'
firstPar.textContent = 'The first and best'
firstPar.classList.add('container')

const secondPar = document.querySelector('#second') 
secondPar.id='2nd'
secondPar.textContent = 'The second and best looking'
secondPar.classList.add('container')

const thirdPar = document.querySelector('#third') 
thirdPar.id='3rd'
thirdPar.textContent = 'The third with middle child syndrome'
thirdPar.classList.add('container')

const fourthPar = document.querySelector('#fourth') 
fourthPar.id='4th'
fourthPar.textContent = 'The fourth and favorite'
fourthPar.classList.add('container')

//LEVEL 2

allPTags.forEach((p, i)=>{
    console.log(p.style.fontSize)
    p.style.fontSize =`${(i+1)*10}px` 
})

allPTags.forEach((p, i)=>{
    if (i % 2 == 0){
        p.style.color = 'red'
    }else{
        p.style.color = 'green'
    }
})

//LEVEL 3

function changeYearColor(){
    document.getElementById('year').style.color = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.querySelector('h2').style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);

}

var intervalID = window.setInterval(changeYearColor, 1000);

const challenges = document.querySelectorAll('li')
for (const challenge of challenges){
    let lastWord = challenge.textContent.match(/\w+$/)[0]
    if (lastWord == 'Done'){
        challenge.style.backgroundColor = 'green'
    } else if (lastWord == 'Ongoing'){
        challenge.style.backgroundColor = 'yellow'
    } else {
        challenge.style.backgroundColor = 'red'
    }
}
    
