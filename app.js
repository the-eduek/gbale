const header = document.querySelector("header");
const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector("nav");
const navLinks = navBar.querySelectorAll("a");

console.log(document.querySelectorAll("[data-animate1]"))

hamburger.addEventListener("click", () => {
    header.classList.toggle("header-open")

    if (header.classList.contains("header-open")) {
        navBar.addEventListener("click", (e) => {
            const clicked = e.target;
    
            navLinks.forEach( link => {
                if (clicked == link) { 
                    header.classList.remove("header-open")
}})})}})

window.addEventListener("scroll", () => {
    if (scrollY > 20) {
        header.classList.add("header-fixed")
    } else {
        header.classList.remove("header-fixed")
    }
})

gsap.registerPlugin(ScrollTrigger);

const tl1 = gsap.timeline();

gsap.to("[data-animate1]", {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "power4.inOut",
        scrollTrigger: {
            trigger: ".about__text",
            start: "top 80%"
        }
    })

gsap.to("[data-animate2]", {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "power4.inout",
        scrollTrigger: {
            trigger: "[data-animate2]",
            start: "top 80%"
        }
    })

gsap.to("[data-animate3]", {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "power4.inOut",
        scrollTrigger: {
            trigger: "[data-animate3]",
            start: "top 80%"
        }
    })

gsap.to("[data-animate4]", {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "power4.inOut",
        scrollTrigger: {
            trigger: "[data-animate4]",
            start: "top 80%"
        }
    })

gsap.to("[data-animate5]", {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "power4.inOut",
        scrollTrigger: {
            trigger: "[data-animate5]",
            start: "top 80%"
        }
    })

gsap.to("[data-animate6]", {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "power4.inOut",
        scrollTrigger: {
            trigger: "[data-animate6]",
            start: "top 80%"
        }
    })

gsap.to(".feature__box", {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "power2",
        stagger: 0.25,
        scrollTrigger: {
            trigger: "[data-animate6]",
            start: "top 80%"
        }
    })

gsap.to("[data-animate7]", {
        duration: 1,
        opacity: 1,
        ease: "power4.inOut",
        scrollTrigger: {
            trigger: "[data-animate7]",
            start: "bottom 80%"
        }
    })
    
gsap.to("[data-animate8]", {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "power4.inOut",
        scrollTrigger: {
            trigger: "[data-animate8]",
            start: "top 80%"
        }
    })

gsap.to(".testimonial__text", {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "power4.inOut",
        scrollTrigger: {
            trigger: ".testimonial__text",
            start: "top 80%"
        }
    })