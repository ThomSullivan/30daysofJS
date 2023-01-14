// this is your main.js script
//LEVEL 1
var challenge = '30 Days of Javascript'

console.log(challenge)
console.log(challenge.length)

console.log(challenge.toUpperCase())

console.log(challenge.toLowerCase())

console.log(challenge.substring(3,7))

console.log(challenge.substring(3,challenge.length))

console.log(challenge.includes('Script'))

console.log(challenge.split())

console.log(challenge.split(' '))

var companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(companies.split(', '))

console.log(challenge.replace('Javascript','Python'))

console.log(challenge.charAt(15))

console.log(challenge.charCodeAt(11))

console.log(challenge.indexOf('a'))

console.log(challenge.lastIndexOf('a'))

var sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because'))
console.log(sentence.lastIndexOf('because'))
console.log(sentence.search('because'))

var whitespace = ' 30 Days of Javascript '
console.log(whitespace.trim())

console.log(challenge.startsWith('3'))

console.log(challenge.endsWith('t'))

console.log(challenge.match(/a/g))

var thirtyDays = '30 Days of '
var javaScript = 'Javascript'
console.log(thirtyDays.concat(javaScript))

console.log(challenge.repeat(2))


// LEVEL 2
var quote = 'The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.'
console.log(quote)

console.log('Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.')

console.log(typeof '10' == 10)
console.log(typeof '10' == 'string')

var num = parseFloat('9.8')
console.log(Math.round(num))

var lorum = 'python'
var ipsum = 'jargon'
var check = 'on'
console.log(lorum.includes(check))
console.log(ipsum.includes(check))

var lorum = 'I hope this course is not full of jargon'
console.log(lorum.includes('jargon'))

var num = Math.floor(Math.random () * 101)
console.log(num)

var num = Math.floor(Math.random () *50) +50
console.log(num)

var num = Math.floor(Math.random () *256)
console.log(num)

var str = 'Javascript'
console.log(str.charAt(Math.floor(Math.random() *10)))

console.log('1 1 1 1 1\n2 1 3 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')

console.log(sentence.substring(31, 54))

// LEVEL 3
var new_sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(new_sentence.match(/love/gi).length)

console.log(sentence.match(/because/gi).length)

var new_sentence =' %I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(new_sentence.replace(/[%$@#&;]/g,''))

var new_sentence ='He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
var salary_info = new_sentence.match(/\d+/g)
var salary = +salary_info.slice(0,1)
var bonus = +salary_info.slice(1,0)
var contracts = +salary_info.slice(2)
console.log((salary*12)+(contracts*12)+bonus)