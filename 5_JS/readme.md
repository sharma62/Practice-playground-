> # Block Scope 
Block scope का मतलब है कि कोई variable केवल उसी block {} के अंदर accessible होता है, जिसमें उसे declare किया गया है। Block को curly braces {} द्वारा define किया जाता है, जैसे कि if, for, या while loops और functions।

JavaScript में let और const block scope का पालन करते हैं, जबकि var block scope का पालन नहीं करता (यह function scope तक सीमित होता है)।

> # Real-Life Analogy of Block Scope:
Block scope को ऐसे समझ सकते हैं जैसे कोई local conversation हो:

Block {} को एक कमरे के जैसे समझें।
let और const variables को कमरे के अंदर की बातचीत के रूप में समझें। यह बातचीत कमरे से बाहर (block के बाहर) सुनी नहीं जा सकती।
लेकिन अगर आप var का use करते हैं, तो यह conversation पूरे function (या global) level पर सुनाई देती है, भले ही वह कमरे (block) के अंदर हुई हो।

> # Why is Block Scope Useful?
Data Encapsulation: Variable को उसके block के अंदर ही सीमित रखते हैं, जिससे गलती से उसे बाहर modify करने से बचा जा सके।
Avoid Conflicts: एक ही नाम के variables को अलग-अलग blocks में अलग values के साथ use किया जा सकता है।
Readable Code: Variables उसी context तक सीमित रहते हैं, जहाँ उनकी जरूरत है।

> # Difference b/w let, var  & const

| Feature            | `var`                   | `let`                   | `const`                 |
|---------------------|-------------------------|-------------------------|-------------------------|
| Scope              | Function-scoped         | Block-scoped            | Block-scoped            |
| Hoisting           | Yes (initialized to `undefined`) | Yes (temporal dead zone) | Yes (temporal dead zone) |
| Re-declaration     | Allowed                | Not allowed            | Not allowed            |
| Reassignment       | Allowed                | Allowed                | Not allowed            |
| Mutability         | Mutable                | Mutable                | Immutable (value cannot change, but object/array properties can) |


> # Data Type
Data type programming languages ka ek fundamental concept hai jo define karta hai ki kisi variable ke andar kis type ka data store ho sakta hai aur us data ke saath kya operations perform kiye ja sakte hain। JavaScript me data types ko broadly do categories me divide kiya gaya hai:

Primitive Data Types
Non-Primitive (Reference) Data Types
1. Primitive Data Types
Primitive data types simple aur immutable (unchangeable) hote hain। JavaScript me 7 primitive data types hain:

| **Data Type**   | **Description**                               | **Example**                   |
|------------------|-----------------------------------------------|-------------------------------|
| **String**       | Textual data store karne ke liye              | `"Hello"`, `'World'`          |
| **Number**       | Numeric data (integer, float) ke liye         | `42`, `3.14`, `-100`          |
| **BigInt**       | Large integers store karne ke liye (2^53-1 se bade) | `123n`, `9007199254740991n` |
| **Boolean**      | True ya False ko represent karta hai          | `true`, `false`               |
| **Undefined**    | Variable declare hua hai but initialize nahi  | `let x;` (x is `undefined`)   |
| **Null**         | Intentional empty value                      | `let y = null;`               |
| **Symbol**       | Unique identifier create karne ke liye        | `Symbol('id')`   


2. Non-Primitive (Reference) Data Types
Non-primitive data types complex structures ko store karte hain, jaise arrays, objects, etc. Ye mutable (changeable) hote hain aur memory me reference ke through handle hote hain।


| **Data Type**   | **Description**                          | **Example**                   |
|------------------|------------------------------------------|-------------------------------|
| **Object**       | Key-value pairs store karta hai          | `{name: "John", age: 25}`     |
| **Array**        | Ordered collection of items              | `[1, 2, 3, 4]`                |
| **Function**     | Code block jo execute ho sakta hai       | `function greet() {}`         |

> # Dynamic Typing in JavaScript
JavaScript dynamically typed language hai, iska matlab ek variable kisi bhi type ka data store kar sakta hai aur uska type runtime pe change ho sakta hai।
`let data = 42;       // Number`
`data = "Hello";      // String`
`data = true;         // Boolean`

> # JavaScript Data Types Check
JavaScript me data type check karne ke liye typeof operator ka use hota hai:

`console.log(typeof "Hello"); // "string"                                  `
`console.log(typeof 42);      // "number"                                  `
`console.log(typeof true);    // "boolean"                                 `
`console.log(typeof undefined); // "undefined"                             `
`console.log(typeof null);    // "object" (bug in JS)                      `
`console.log(typeof {});      // "object"                     `
`console.log(typeof []);      // "object" (Arrays are objects)`
`console.log(typeof Symbol()); // "symbol"`
`console.log(typeof BigInt(123)); // "bigint"`