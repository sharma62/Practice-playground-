const path = require('path');
// //multiple path ko join karne ke liye
//  let pathJoiner = path.join('a', 'b', 'c', 'd');
// console.log( pathJoiner);
/*  return absolute path karega by resovinga a sequence of paths segments
✅ It starts from right to left and stops when it finds an absolute path
✅ If no absolute path is found, it uses process.cwd() (current working directory)*/
let pathResolver  =path.resolve('git','index.js')
console.log(pathResolver);
// flaxible path resolver
pathResolver  = path.resolve('git','index.js','..')
console.log(pathResolver);

pathResolver  =path.resolve('git','index.js','../..')
console.log(pathResolver);
// basename method is used to get the last part of a path
// let baseName = path.basename('a/b/c/d/index.js');
// console.log(baseName)
// let dir = path.dirname('a/b/c/d/index.js');
// console.log(dir)
// //extname method is used to get the extension of a file
// let ext = path.extname('a/b/c/d/index.js');
// console.log(ext)

// //parse method is used to parse a path string into an object
// let parsed = path.parse(path.join(__dirname,'a/b/c/d/index.js'));
// console.log(parsed)

// //format method is used to convert the parsed object back to a path string
// let format = path.format(parsed)
// console.log("Format:",format)