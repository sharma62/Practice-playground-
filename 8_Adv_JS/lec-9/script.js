// 1. async
/*

const promise = async function (params) {
    console.log(params)  
    return "reslove" // promise.resolve() use ho raha h
}

promise("hello")
        .then((res) => {
            console.log("success", res)
        })
        .catch((err) => { 
            console.log("err", err) 
        })
*/

/*
const promise = async function (params) {
    console.log(params)  
    throw new Error("throw explicitly");     // promise.reject() use ho raha h
}

promise("hello")
        .then((res) => {
            console.log("success", res)
        })
        .catch((err) => { 
            console.log("err", err)
        })


*/

// 2. await

async function name(params) {
    console.log("name method trigger...")
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("inner promise body")
        }, 3000);
        return resolve("wait for 3 sec. . . ")
    })
    let result = await promise

    console.log(result)
}

name()
