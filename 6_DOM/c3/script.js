const fullName = document.querySelector('#name')
const phone = document.querySelector('#phone')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const form = document.querySelector('form')
// console.log(form)

form.addEventListener('submit', (e) => {

    let nameVal = fullName.value.trim()
    let phoneVal = phone.value.trim()
    let emailVal = email.value.trim()

    e.preventDefault()
    if (nameVal === '' || emailVal === '' || password === '') {
        alert('Please fill all fields')
        nameVal.focus()
        return;
    }

    if (!isNaN(nameVal)) {
        alert('Name must be a string')
        nameVal.focus()
        return;
    }
    if (emailVal === '') {
        alert("Email is required")
        emailVal.focus()
        return;
    }
    if (password.length < 8) {
        alert('pssword must be more than 8 characters')
        password.focus()
        return;
    }
})
