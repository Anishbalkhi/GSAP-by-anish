gsap. from("h1",{
    y:20,
    duration:2,
    delay:0.5,
    color: "red",
    stagger:0.3,
        rotate:45,
        yoyo:true,
        repeat:-1,

})

gsap. to("#box",{
    y:500,
    duration:2,
    delay:1,
    repeat:-1,
    yoyo:true
})
let tl = gsap.timeline()

tl.to("#box1",{
    x:1200,
    duration:2,
    delay:1.5,
    // repeat:-1,
    yoyo:true
})

tl.from("#box2",{
    x:1200,
    duration:2,
    // delay:2.5,
    // repeat:-1,
    yoyo:true
})

tl.to("#box3",{
    x:1200,
    duration:2,
    // delay:3.5,
    // repeat:-1,
    yoyo:true
})
