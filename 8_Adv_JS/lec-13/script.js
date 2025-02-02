
function debounce(func, delay) {
    let timer = delay
    console.log('debounce',delay)
    return function (){
        clearTimeout(delay)
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