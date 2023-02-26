console.log('sanity')
body = document.querySelector('body')
body.style.textAlign = 'center'
window.onload = () =>{
    

    keyName = document.createElement('div')
    keyName.id = 'keyName'
    keyName.style.display = 'inline-flex'
    keyName.style.width='max-content'
    keyName.style.padding='5px'
    keyName.style.fontSize = '72pt'
    keyName.style.borderStyle = 'solid'
    document.body.appendChild(keyName)

    document.body.appendChild(document.createElement('br'))

    keyCode = document.createElement('p')
    keyCode.id = 'keyCode'
    keyCode.style.display = 'inline-flex'
    keyCode.style.width='max-content'
    keyCode.style.padding='5px'
    keyCode.style.fontSize = '72pt'
    keyCode.style.borderStyle = 'solid'
    document.body.appendChild(keyCode)

    

    document.addEventListener('keypress', e=>{
        console.log(e.key, e.keyCode)
        keyName = document.getElementById('keyName')
        keyName.textContent = `You pressed ${e.key}`
        keyCode = document.getElementById('keyCode')
        keyCode.textContent = e.keyCode
    })
}