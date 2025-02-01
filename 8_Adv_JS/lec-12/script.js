
let ul_list = document.querySelector('#ul-list')

function counter() {
    let count = 2 // initialize counter
    return function () {
        return count++ //return value
    }
}
let cnt = counter() // create closure for cnt

ul_list.addEventListener('click', (e) => {


    let li = document.createElement("li")
    li.textContent = "link-" + cnt() // use clouser's laxical environment value

    ul_list.appendChild(li).classList.add('red')
    // console.log(cnt)

})
