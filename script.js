


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function VideoAnimation() {
    let video1 = document.querySelector(".video-container")

    let playbtn = document.querySelector(".play")

    video1.addEventListener("mouseenter", () =>{

        gsap.to(playbtn,{
            opacity:1,
            scale:1
        })

    })



    video1.addEventListener("mouseleave", () => {
        gsap.to(playbtn,{
            opacity:0,
            scale:0
        })
    })

    video1.addEventListener("mousemove",(dets)=>{
        gsap.to(playbtn,{
            left:dets.x-40,
            top:dets.y-50

            
        })

    })
}

VideoAnimation()

function loadingAnimation() {
    gsap.from(".page1 h1", {
        y:90,
        opacity:0,
        delay:0.5,
        duration:0.8,
        stagger:0.2
    })
    
    
    gsap.from(".page1 .video-container", {
        scale:0.9,
        opacity:0,
        delay:1.3,
        duration:0.5,
    })
}

loadingAnimation()



function curserAnimation() {
    
document.addEventListener("mousemove", (dets) =>{
    gsap.to(".cursor", {
        left:dets.x,
        top:dets.y


    })

})



document.querySelectorAll(".child").forEach((elem) =>{
    elem.addEventListener("mouseenter", () =>{
    gsap.to(".cursor",{
    transform: 'translate(-50%, -50%) scale(1)',
    });
});
    elem.addEventListener("mouseleave", () =>{
    gsap.to(".cursor",{
    transform: 'translate(-50%, -50%) scale(0)',
    });
  });


})
}

curserAnimation()