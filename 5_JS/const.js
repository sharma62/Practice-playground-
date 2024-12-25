/*
1.Scope: Block-scoped (like let).
2.Hoisting: Also hoisted, but in the "temporal dead zone".
3.Immutability: The value cannot be reassigned, but objects/arrays declared with const can have their properties or elements modified
4.Re-declaration: Cannot be re-declared in the same scope.

*/

function testConst() {
    const c = 10;
    console.log(c); // 10
    
    // c = 20; // Error: Assignment to constant variable
    
    if (true) {
      const c = 30; // block-scoped, different from outer 'c'
      console.log(c); // 30
    }
    console.log(c); // 10 (outer 'c' is unaffected)
    
    const arr = [1, 2, 3];
    arr.push(4); // allowed, as the array itself is not reassigned
    console.log(arr); // [1, 2, 3, 4]
    
    // arr = [5, 6]; // Error: Assignment to constant variable
  }
  testConst();
  