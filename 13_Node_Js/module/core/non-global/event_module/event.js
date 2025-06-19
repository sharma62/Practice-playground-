// ✅ 3. Core Module

const EventEmitter = require('events')

const eventCreater = new EventEmitter()   // EventEmitter class ka instance banaya

eventCreater.on('greet',()=>{ // 'greet' event ke liye listener function define kiya
    console.log('Hello, welcome to the event emitter example!')
})


 eventCreater.emit('greet') // 'greet' event ko trigger kiya



 eventCreater.on('greet2',()=>{
    console.log('Hello, this is greet 2 event!')
 })

 eventCreater.emit('greet2') 

 eventCreater.removeListener('greet2',()=>{
    console.log("greet 2 event listener removed!")
 })

 eventCreater.emit('greet2')