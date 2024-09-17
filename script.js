
var tl= gsap.timeline();
tl.from("#nav-h3", {
    y:-5,
    delay :0.1,
    duration : 0.4,
    opacity :0
});
tl.from("#nav-ul li", {
    y:-5,
    duration : 0.5,
    opacity :0,
    stagger : 0.2
});
tl.from("#main h1", {
    x:-500,
    duration : 0.8,
    opacity :0,
    stagger: 0.3
});
tl.from("#main img",{
    x:100,
    rotate:45,
    opacity:0,
    duration:0.5,
    stagger: 0.4
})
tl.from("#btm",{
    opacity:0,
    duration:0.8,
    stagger: 0.3
})