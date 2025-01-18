/*
1.Scope: Function-scoped (not block-scoped).
2.Hoisting: Variables declared with var are hoisted, meaning they can be accessed before their declaration (but their value is undefined until initialized).
3.Re-declaration: Can be re-declared in the same scope.

*/


function testVar() {
  console.log(a); // undefined (hoisted but not initialized)
  var a = 10;
  console.log(a); //10

  if (true) {
    var a = 20; // same variable is re-declared
    console.log(a); // 20  
  }
  console.log(a); // 20 (not block-scoped)
}
//   console.log("Function call se pahle"+a);
testVar();
console.log("Function call ke baad" + a);


/*
Block scope का मतलब है कि कोई variable केवल उसी block {} के अंदर accessible होता है, जिसमें उसे declare किया गया है। Block को curly braces {} द्वारा define किया जाता है, जैसे कि if, for, या while loops और functions।

JavaScript में let और const block scope का पालन करते हैं, जबकि var block scope का पालन नहीं करता (यह function scope तक सीमित होता है)।

 */