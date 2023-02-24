
title = document.querySelector('title')
title.textContent = asabenehChallenges2020.challengeTitle
body = document.querySelector('body')
body.style.textAlign = 'center'


function colorChanger(){
    document.getElementById('year').style.color = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('date').style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);

}
var intervalID = window.setInterval(colorChanger, 1000);

window.onload = () =>{
    challengeTitle = document.createElement('h1')
    challengeTitle.innerHTML = asabenehChallenges2020.challengeTitle +'<span id="year"></span>'
    document.body.appendChild(challengeTitle)

    yearSpan = document.querySelector('#year')
    yearSpan.textContent = asabenehChallenges2020.challengeYear
    yearSpan.style.fontSize = '50pt'

    challengeSubTitle = document.createElement('h2')
    challengeSubTitle.textContent = asabenehChallenges2020.challengeSubtitle
    challengeSubTitle.style.textDecoration = 'underline'
    document.body.appendChild(challengeSubTitle)
    
    dateBox = document.createElement('div')
    dateBox.id = 'date'
    var date = new Date()
    dateBox.textContent = date.toGMTString()
    dateBox.style.display = 'inline-flex'
    dateBox.style.width = 'max-content'
    dateBox.style.padding = '5px'
    document.body.appendChild(dateBox)

    breaker = document.createElement('br')
    document.body.appendChild(breaker)

    for (const challenge of asabenehChallenges2020.challenges){
        newDiv = document.createElement('div')
        newDiv.style.display = 'inline-flex'
        newDiv.style.width = '85%'
        newDiv.style.minHeight = '50px'
        newDiv.style.height = 'auto'
        newDiv.style.margin = '10px'
        if (challenge.status == 'Done'){
            newDiv.style.backgroundColor = 'green'
        }else if (challenge.status == 'Ongoing'){
            newDiv.style.backgroundColor = 'yellow'
        }else{
            newDiv.style.backgroundColor = 'red'
        }

        table = document.createElement('table')
        table.style.tableLayout = 'fixed'
        table.style.width = '100%'
        tableRow = document.createElement('tr')

        rowName = document.createElement('td')
        rowName.style.width='25%'
        rowName.textContent = challenge.name

        rowTopics = document.createElement('td')
        rowTopics.style.width='50%'
        topicDetails = document.createElement('details')
        detailSummary = document.createElement('summary')
        detailSummary.textContent = challenge.topics[0]
        for (const topic of challenge.topics.slice(1,)){
            item = document.createElement('p')
            item.textContent = topic
            item.style.margin = '0'
            topicDetails.append(item)
        }

        topicDetails.append(detailSummary)
        rowTopics.append(topicDetails)
        rowStatus = document.createElement('td')
        rowStatus.style.width='25%'
        rowStatus.textContent = challenge.status
        newDiv.append(table)
        table.append(tableRow)
        tableRow.append(rowName)
        tableRow.append(rowTopics)
        tableRow.append(rowStatus)
        
        document.body.appendChild(newDiv);
    }
    let author = asabenehChallenges2020.author
    authorName = document.createElement('h2')
    authorName.textContent = `${author.firstName} ${author.lastName}`
    document.body.appendChild(authorName)

    authorBio = document.createElement('p')
    authorBio.textContent = author.bio
    document.body.appendChild(authorBio)

    

    titlesTable = document.createElement('table')
    titlesTable.style.margin = '25px'
    for (const title of author.titles){
        tableRow = document.createElement('tr')
        tableRow.textContent = title
        titlesTable.append(tableRow)
    }

    skillsTable = document.createElement('table')
    skillsTable.style.margin = '25px'
    for (const skill of author.skills){
        tableRow = document.createElement('tr')
        tableRow.textContent = skill
        skillsTable.append(tableRow)
    }

    qualTable = document.createElement('table')
    qualTable.style.margin = '25px'
    for (const qual of author.qualifications){
        tableRow = document.createElement('tr')
        tableRow.textContent = qual
        qualTable.append(tableRow)
    }

    tableDiv = document.createElement('div')
    tableDiv.style.display = 'flex'
    tableDiv.style.justifyContent = 'center'
    tableDiv.style.textAlign = 'left'
    tableDiv.append(titlesTable, skillsTable, qualTable)
    document.body.appendChild(tableDiv)

    keywordTitle = document.createElement('h3')
    keywordTitle.textContent = 'Keywords'
    keywordTitle.style.textAlign = 'left'
    keywordTitle.style.margin = '25px'
    document.body.appendChild(keywordTitle)

    keywordDiv = document.createElement('div')
    keywordDiv.style.margin = '0px 100px 0px 100px'
    for (const keyword of asabenehChallenges2020.keywords){
        keyDiv = document.createElement('div')
        keyDiv.textContent = '# ' + keyword
        keyDiv.style.borderStyle ='solid'
        keyDiv.style.padding ='5px'
        keyDiv.style.margin = '5px'
        keyDiv.style.display = 'inline-flex'
        keyDiv.style.borderRadius = '15px'
        keyDiv.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);

        keywordDiv.append(keyDiv)
    }
    document.body.appendChild(keywordDiv)

}
