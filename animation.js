// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animate hero section
gsap.from(".hero .intro", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".hero",
    start: "top 70%",
  },
});

gsap.from(".hero-image", {
  opacity: 0,
  y: 100,
  duration: 1,
  delay: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".hero",
    start: "top 70%",
  },
});

// Animate About section
gsap.from(".about-image", {
  y: -100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%",
  },
});

gsap.from(".about-text", {
  y: 100,
  opacity: 0,
  duration: 1,
  delay: 0.2,
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%",
  },
});

// Animate skill cards
gsap.from(".skill-card", {
  opacity: 0,
  // y: 10,
  duration: 0.4,
  stagger: 0.15,
  scrollTrigger: {
    trigger: ".skills-grid",
    start: "top 85%",
  },
});

// Animate each project card
// Loop through all project cards
document.querySelectorAll(".project-card").forEach((card) => {
  gsap.from(card, {
    // scale: 0.95,
    opacity: 0,
    y: 50,
    duration: 0.6,
    ease: "power2.out",
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
      toggleActions: "play none none none", // only play once on scroll
    },
  });
});

// Animate contact form
gsap.from(".contact-form", {
  scale: 0.95,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".contact-form",
    start: "top 90%",
  },
});


window.addEventListener("load", () => {
  ScrollTrigger.refresh(); // recalculates all trigger positions
});


window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});
