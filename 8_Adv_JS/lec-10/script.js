// /*
// Objective: Understand asynchronous JavaScript, promises, and async/await.

// Requirements:

// Create a promise that resolves after 2 seconds.
// Use then() method to handle promise resolution.
// Use async/await to fetch data from an API.

// */
// method 1
async function promise() {
    return new Promise((resolve, reject) => {
        console.log('promise resolving wait. . . 2 sec')
        setTimeout(() => {
            resolve(
                fetch("https://jsonplaceholder.typicode.com/todos/1")
            )
            console.log('promise resolved')
        }, 3000);
    })
}

let result = await promise()

let obj = await result.json()
console.log(obj)
console.log(obj.userId)
console.log(obj.title)



// method 2

setTimeout(() => {
    
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
    
}, 2000);
