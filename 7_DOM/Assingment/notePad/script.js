let toggleAutoSaveBtn = document.querySelector('input[type="checkbox"]')
let notepad = document.querySelector('#notepad')
let autoSaveInterval;
toggleAutoSaveBtn.addEventListener('click', (e) => {
    let lebel = toggleAutoSaveBtn.nextElementSibling.nextElementSibling
    if (toggleAutoSaveBtn.checked) {
        lebel.textContent = "Auto save on"
        autoSaveInterval = setInterval(() => {
            localStorage.setItem("data", notepad.value)
        }, 1000)

    } else {
        lebel.textContent = "Auto save off"
        clearInterval(autoSaveInterval)

    }

})

window.addEventListener('load',()=>{
    let save = localStorage.getItem('data')
    if(save){
        notepad.value=save
    }
})