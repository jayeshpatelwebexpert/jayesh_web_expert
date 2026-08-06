
$(document).ready(function () {

    // Open Mobile Menu
    $(".cta .mobile-icon").click(function () {
        $("body").addClass("open-menu");
    });
 
    // Close Mobile Menu
    $(".mobile-menu .mobile-menu-header span").click(function () {
        $("body").removeClass("open-menu");
    });
});

function Marquee(selector, speed) {
  const parentSelector = document.querySelector(selector);
  const clone = parentSelector.innerHTML;
  const firstElement = parentSelector.children[0];
  let i = 0;
  console.log(firstElement);
  parentSelector.insertAdjacentHTML('beforeend', clone);
  parentSelector.insertAdjacentHTML('beforeend', clone);

  setInterval(function () {
    firstElement.style.marginLeft = `-${i}px`;
    if (i > firstElement.clientWidth) {
      i = 0;
    }
    i = i + speed;
  }, 0);
}

//after window is completed load
//1 class selector for marquee
//2 marquee speed 0.2
window.addEventListener('load', Marquee('.marquee', 0.2))

let posX = 0,
  posY = 0;

let mouseX = 0,
  mouseY = 0;

gsap.to(".cursor-example", {
  duration: 0.018,
  repeat: -1,
  onRepeat: function () {
    posX += (mouseX - posX) / 8;
    posY += (mouseY - posY) / 8;

    gsap.set(".cursor-example", {
      css: {
        left: posX - 1,
        top: posY - 2
      }
    });
  }
});

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".services-card, .hero-card, .industries-card, .state-card, .featured-card, .section-title span,.section-title h2,.section-title p, .testimonial-card, .contact-card h3, .expertise-line-1, .cta-btns, .featured-text span, .featured-text span, .featured-link a, .about-section .about-link a").forEach((card) => {
    gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",

        scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
        }
    });
});
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".counter").forEach((counter) => {

    const obj = { value: 0 };
    const target = parseInt(counter.dataset.count);

    gsap.to(obj, {
        value: target,
        duration: 2,
        ease: "power2.out",

        scrollTrigger: {
            trigger: counter,
            start: "top 85%",
            once: true
        },

        onUpdate: () => {
            counter.textContent = Math.ceil(obj.value) + "+";
        }
    });

});