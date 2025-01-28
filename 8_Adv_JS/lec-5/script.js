// Write a JavaScript function that increments and logs a counter each time it's called.

// Code:

function counter() {

    let num =0

    // return () => num = num + 1 
    return ()=>{
        num++
        console.log(num)
    }

}



const incrementCounter = counter();

incrementCounter();

incrementCounter();
incrementCounter();
incrementCounter();
incrementCounter();
incrementCounter(); 