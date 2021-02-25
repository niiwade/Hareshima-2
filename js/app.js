// Smooth scroll 

const links = document.querySelectorAll(".nav.ul li a");

for (const link of links) {
    link.addEventListener("click", smoothScroll);
}

function smoothScroll(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    document.querySelector(href).scrollIntoView({
        behaviour: "smooth"
    });
}