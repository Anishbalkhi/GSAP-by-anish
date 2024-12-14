let tl = gsap.timeline()

tl.from("#logo",{
    y:-30,
    duration:1,
    // delay:1,
    opacity:0
})

tl.from(".icon",{
    y:-30,
    duration:0.6,
    // delay:1,
    opacity:0,
    stagger:0.2
})

