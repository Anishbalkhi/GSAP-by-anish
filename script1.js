

gsap.from(".page2 h1", {
    opacity: 0,
    duration: 2,
    x: 500,
    scrollTrigger: {
        trigger: ".page2 h1",
        markers: true, 
        start: "top 50%"
    }
});
