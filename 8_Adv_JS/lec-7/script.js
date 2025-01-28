//callback, async & Promise 

/* 
callbcak : callback is way where passing function as paramter & that paramter behave as function and use ref of higher order function.

1. callback function : A function passed as an arg to another function.
2. execution: the callback function is executed after some operation has been completed.
3. purpose : allows a function to call another function, enabling asynchronous operation and handling.

async : non-blocking , task can be overlap.
sync :sequential execution, might be blocking the next task 
*/

//  callback with async 
/*
function one(callback) {
    console.log("Sync logic !")
    setTimeout(() => {
        console.log("Async logic !")


        6
        callback()
    }, 2000);
    console.log("last step")
}

/*
one(()=>{
    console.log("callback called !")
})
*/
// callback hell
/*
function step1(callback) { // callback = ()=>{step2(val)} 
    console.log("step 1")
    callback()
}
function step2(callback) { // callback = ()=>{ step3(val)}
    console.log("step 2")
    callback()
}
function step3(callback) {  // callback = ()={ step4_end()}
    console.log("step 3")
    callback()
}

function step4_end() {
    console.log("step 4 and end ")
}
*/
/*
step1(()=>{
    step2(()=>{
      step3(()=>{
        step4_end()
      })
    })
})
*/


// chaining callback
/*
function downloadFile(url, callback) {
    console.log("Downloading file from:", url);
    setTimeout(() => {
        let filePath = "/downloads/file.txt";
        console.log("File downloaded to:", filePath);
        callback(filePath);
    }, 2000); // Simulating a 2-second download
}

function processFile(filePath, callback) {
    console.log("Processing file at:", filePath);
    setTimeout(() => {
        let processedFile = filePath.replace(".txt", ".json");
        console.log("File processed to:", processedFile);
        callback(processedFile);
    }, 2000); // Simulating a 2-second processing
}
*/
/*
downloadFile("http://example.com/file", (filePath) => {
    processFile(filePath, (processedFile) => {
        console.log("Task complete. Final file:", processedFile);
    });
});

*/

// o/p
/*
 print - downloading file from : http://example.com/file 
 wait 2 sec
 print -File downloaded to : /downloads/file.txt :
 print- Processing file at: /downloads/file.txt
 wait 2 sec
 print - File processed to: /downloads/file.json
 print - Task complete. Final file : /downloads/file.json
*/


// promise  : promise is javascipt object is capable to handle async opeartion compared to callback 

// promise state
//    1 . pending   : initial state, nither fullfiled or not rejected
//    2 . fullfiled : opeartion completly or sucssfull & promise has result value 
//    3 . Reject    : opeartion completely or fail & promise has resean or error

/*
const promise = new promise((resolve,reject)=>{
    // perfom async operation 
    const sucess = false
    if(sucess){
        resolve("sucess") //promise sucessfull fullfiled
    }else{
        reject("fail") // promise fail
    }
})
*/

// Step 1: Create a Promise
/*
const myPromise = new Promise((resolve, reject) => {
    console.log("Promise is being executed...");

    let condition = true   ; // Change this to false to test rejection

    if (condition) {
        setTimeout(() => {
            resolve("Promise resolved successfully!");
        }, 2000); // Simulate async behavior with 2-second delay
    } else {
        setTimeout(() => {
            reject("Promise rejected due to some error!");
        }, 2000); // Simulate async behavior with 2-second delay
    }
});

// Step 2: Handle the Promise
myPromise
    .then((result) => {
        console.log("Success:", result);
    })
    .catch((error) => {
        console.log("Error:", error);
    })
    .finally(() => {
        console.log("Promise execution completed.");
    });
*/
// Output will vary based on the value of `condition`.

// Practice Question

//  Basic Promise
// 1.  Q: एक Promise लिखें, जो 2 सेकंड के बाद resolve हो जाए और message "Task completed!" return करे।

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task completed !")
    }, 2000)
})

promise
    .then((result) => {
        // console.log(`resolve :${result}`)
    })



//  Handling Errors with catch
// Q: ऐसा Promise बनाएं जो resolve होने पर "Success!" और reject होने पर "Error occurred!" print करे। 
// Hint: condition का use करें (e.g., let success = true;).

const promise2 = new Promise((resolve, reject) => {
    let success = false
    if (success) {
        resolve("Success !")
    } else {
        reject("Error !")
    }
})

promise2
    .then((result) => {
        // console.log(result) 
    })
    .catch((err) => {
        // console.log(err)
    })

// 3. Chaining Promises
// Q: एक Promise बनाएं जो पहले "Step 1 Completed" print करे, फिर दूसरे Promise को call करे जो "Step 2 Completed" return करे।

// promise create
const promise3_part_1 = new Promise((resolve, reject) => {
    resolve("Step 1 completed !")
})
const promise3_part_2 = new Promise((resolve, reject) => {
    resolve("Step 2 completed !")
})


// handle
/*
promise3_part_1
    .then((result) => {
        console.log(result)
        promise3_part_2
            .then((result) => {
                console.log(result)
            })
    })

*/

// Using finally
// Q: एक Promise लिखें, जो resolve हो या reject, अंत में "Task Finished!" print करे।
// Hint: `finally` का use करें।

/*
// create
const promise4 = new Promise((resolve, reject) => {
    let task = false
    if (task) {
        resolve("Task solved !")
    } else {
        reject("Task Thorw Error !")
    }
})
// handle

promise4 
    .then((result)=>{
        console.log(`Success : ${result}`)
    })
    .catch((err)=>{
        console.log(`Error : ${err}`)
    })
    .finally((final)=>{
        console.log("Task Finished !")
    })
*/



// 5. Fetching Data Simulation
// Q: एक Promise बनाएं जो simulate करे कि आप server से data ला रहे हैं।
// अगर server से data successfully मिलता है तो "Data fetched successfully!" और fail होने पर "Failed to fetch data!" return करे।
/*
const promise5 = new Promise((resolve,reject)=>{
    let data = confirm("Fatch data from server - ok(yes) | cancel(no) ")
    if(data){
        resolve("Data Fatched succsssfully!")
    }
    else{
        reject("Failed to fetch data!")
    }
})

promise5
    .then((result)=>{
        console.log(`Success : ${result}` )
    })
    .catch((err)=>{
        console.log(`Error : ${err}` )
    })

 */



// 6. Nested Promises
function nestedPromise() {
    return new Promise((resolve) => {
        resolve(new Promise((innerResolve) => {
            innerResolve("Resolved inner promise!");
        }));
    });
}
// Q: एक Promise बनाएं जो resolve होने पर एक और Promise return करे।
// Output: "First Promise Resolved" -> "Second Promise Resolved".
/*
const promise6 = new Promise((resolve, reject) => {
    return resolve(
        new Promise((resolve, reject) => {
            resolve(
                resolve("First problem resolved")
            )
        }
        ))
})

promise6
    .then((nestedPromise) => {
        console.log(nestedPromise)
        return "Second Problem Resolved"
    })
    .then((res) => {
        console.log(res)
        return "Third Problem Resolved"
    })
    .then((res) => {
        console.log(res)
        return "Forth Problem Resolved"
    })
    .then((res) => {
        console.log(res)
        console.log("Last problem resolved")
    })
*/
// 7. Converting Callback to Promise
// Q: एक callback-based function को Promise में convert करें।
// Example: SetTimeout callback को Promise में बदलें।
/*
function HOF(callback) {
     return new Promise((resolve, reject) => {
        setTimeout(() => {
            callback()
            resolve("Problem Solved")
        }, 2000);
    })
}


let fun = HOF(() => {
    console.log("callback Function")
})

fun.then((res) => {
    console.log(res)
})

*/

// 8. Race Between Promises
// Q: `Promise.race` का use करके ऐसा code लिखें जो दो Promises में से जल्दी resolve होने वाले को handle करे।

/*
const promise7_part_1 = new Promise((resolve, reject) => {
    let condi = true
    if (condi) {
        setTimeout(() => {
            resolve("Problem Resolved")
        }, 2000);
    } else {
        setTimeout(() => {
            reject("Problem reject")
        }, 2000);
    }
})
const promise7_part_2 = new Promise((resolve, reject) => {
    let condi = true
    if (condi) {
        setTimeout(() => {
            resolve("Problem Resolved")
        }, 4000);
    } else {
        setTimeout(() => {
            reject("Problem reject")
        }, 4000);
    }
})
const promise7_part_3 = new Promise((resolve, reject) => {
    let condi = true
    if (condi) {
        setTimeout(() => {
            resolve("Problem Resolved")
        }, 6000);
    } else {
        setTimeout(() => {
            reject("Problem reject")
        }, 6000);
    }
})

// handle

Promise.all([promise7_part_1, promise7_part_2, promise7_part_3])
    .then((result) => {
        console.log(result)
    })
    .catch((err) => {
        console.log(err)
    })

*/

const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data fetched successfully!"), 3000); // Data fetched in 3 seconds
});

const timeout = new Promise((resolve, reject) => {
    setTimeout(() => reject("Request timed out!"), 2000); // Timeout in 2 seconds
});

Promise.race([fetchData, timeout])
    .then((result) => {
        console.log("Result: ", result);
    })
    .catch((error) => {
        console.error("Error: ", error);
    });

// 9. Promise.all Example
// Q: `Promise.all` का use करके ऐसा code लिखें जो तीन Promises को एक साथ execute करे और सभी के results return करे।
// Example: ["Promise 1 Done", "Promise 2 Done", "Promise 3 Done"]

/*
const promise8_part_1 = new Promise((resolve, reject) => {
    let condi = true
    if (condi) {
        resolve("Problem Resolved")
    } else {
        reject("Problem Rejected")
    }
})
const promise8_part_2 = new Promise((resolve, reject) => {
    let condi = true
    if (condi) {
        resolve("Problem Resolved")
    } else {
        reject("Problem Rejected")
    }
})
const promise8_part_3 = new Promise((resolve, reject) => {
    let condi = true
    if (condi) {
        resolve("Problem Resolved")
    } else {
        reject("Problem Rejected")
    }
})

// handle

Promise.all([promise8_part_1, promise8_part_2, promise8_part_3])
    .then((result) => {
        console.log(result)
    })
    .catch((err) => {
        console.log(err)
    })


*/

// 10. Handling Multiple Errors
// Q: ऐसा code लिखें जिसमें multiple Promises हों और उनमें से कोई fail हो जाए तो error handle कर सकें।
// Hint: Use `Promise.allSettled`.
/*
// create 
const promise9_part_1 = new Promise((resolve, reject) => {
    let condi = true
    if (condi) {
        setTimeout(() => {
            resolve("promise9_part_1 resolved")
        }, 2000);
    } else {
        setTimeout(() => {
            reject("promise9_part_1 rejected")
        }, 2000);
    }
})
const promise9_part_2 = new Promise((resolve, reject) => {
    let condi = true
    if (condi) {
        setTimeout(() => {
            resolve("promise9_part_2 resolved")
        }, 2000);
    } else {
        setTimeout(() => {
            reject("promise9_part_2 rejected")
        }, 2000);
    }
})
const promise9_part_3 = new Promise((resolve, reject) => {
    let condi = true
    if (condi) {
        setTimeout(() => {
            resolve("promise9_part_3 resolved")
        }, 2000);
    } else {
        setTimeout(() => {
            reject("promise9_part_3 rejected")
        }, 2000);
    }
})
const promise9_part_4 = new Promise((resolve, reject) => {
    let condi = true
    if (condi) {
        setTimeout(() => {
            resolve("promise9_part_4 resolved")
        }, 2000);
    } else {
        setTimeout(() => {
            reject("promise9_part_4 rejected")
        }, 2000);
    }
})
const promise9_part_5 = new Promise((resolve, reject) => {
    let condi = false
    if (condi) {
        setTimeout(() => {
            resolve("promise9_part_5 resolved")
        }, 2000);
    } else {
        setTimeout(() => {
            reject("promise9_part_5 rejected")
        }, 2000);
    }
})

// handle
Promise.allSettled([promise9_part_1, promise9_part_2, promise9_part_3, promise9_part_4, promise9_part_5])
    .then((res) => {
        console.log(res)  // About all promise
        console.log(res[0])  // about 0th index 
        console.log(`Status : ${res[0].status}`)   //0th index status
        console.log(`reason : ${res[0].reason}`)  //0th index  reseaon
    })
    .catch((err) => {
        console.log(err)
    })


*/
