/*
1.Scope: Block-scoped (exists only within the block {} where it is declared).
2.Hoisting: Variables declared with let are hoisted but are in the "temporal dead zone" (cannot be accessed before declaration).
3.Re-declaration: Cannot be re-declared in the same scope.
 */

function testLet() {
    // console.log(b); // Error: Cannot access 'b' before initialization
    let b = 10; 
    console.log(b); // 10
    
    if (true) {
      let b = 20; // block-scoped, different from outer 'b'
      console.log(b); // 20
    }
    console.log(b); // 10 (outer 'b' is unaffected)
  }
  testLet();
    //   console.log("Function call ke baad     "+a);