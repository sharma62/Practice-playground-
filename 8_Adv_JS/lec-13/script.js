/*
Objective: Understand event bubbling, event delegation, and this keyword in JavaScript.

Requirements:

Explain event bubbling with an example.
Implement event delegation to handle events on multiple elements.
Use this keyword to access the context of a function.

*/
function debounce(func, delay) {
    let timer = delay
    return function (){
        clearTimeout(dexlay)
        timer = setTimeout(() => {
            handleSearch()
        }, delay);
     }
}


function handleSearch() {
    console.log("searching . . . ")
}

let handleSearchBar = document.querySelector('#searchBar')
handleSearchBar.addEventListener('input', debounce(handleSearchBar, 500))