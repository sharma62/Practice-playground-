// console.log(gsap)

// gsap.to('#box', {
//     x: 1300,
//      duration: 3,
//     width: 200,
//     height: 200,
//     delay: 1,
//     rotate: 360,
//     backgroundColor:'yellow',
//     // scale:1.5
// });
// // gsap.from("#box", { duration: 3,  })

gsap.from("#box #box-1",{
    y:50,
    duration:1,
    opacity:1,
   
})
gsap.from("#box #box-2",{
    y:50,
    duration:1,
    opacity:1,
    delay:1
     
})
gsap.from("#box-5 h1", {
    y:50,
    duration: 1, 
    // stagger:.8,
    opacity:.2

    
    
})