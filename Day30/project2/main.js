console.log('sanity')

function validateForm(){
    for(const i of document.getElementsByClassName('error')){
        i.innerHTML = ''
    }
    errors = Array()
    form = document.forms['webForm']
    if (!/^([a-zA-Z0-9]){3,16}$/.test( form['firstName'].value )){
        errors.push({'firstNameError':'First Name must be alphanumeric and 3 - 16 characters'})
    }
    if (!/^([a-zA-Z0-9]){3,16}$/.test( form['lastName'].value )){
        errors.push({'lastNameError':'Last Name must be alphanumeric and 3 - 16 characters'})
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form['email'].value)){
        errors.push({'emailError':'Enter a valid E-mail'})
    }
    if (!/^([a-zA-Z0-9@_-]){6,20}$/.test( form['password1'].value )){
        errors.push({'password1Error':'Password must be alphanumeric or @, _, and - and be 6-20 characters long'})
    }
    if(form['password2'].value !== form['password1'].value){
        errors.push({'password1Error':'Passwords do not match'})
        errors.push({'password2Error':'Passwords do not match'})
    }
    if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test( form['phone'].value )){
        errors.push({'phoneError': 'Phone number should be ten digits '})
    }
    if (form['bio'].value < 8 || form['bio'].value > 50 ){
        errors.push({'bioError': 'Bio must be 8-50 characters long'})
    }
    return errors
}
submitButton = document.getElementById('submit')
submitButton.addEventListener('click', e =>{
    errors = validateForm()
    if(errors.length == 0){
        console.log('Success!')
        return
    }
    for(const i of errors){
        errorDiv = document.getElementById(Object.keys(i)[0])
        error = document.createElement('li')
        error.textContent = Object.values(i)[0]
        errorDiv.append(error)
        
    }

})