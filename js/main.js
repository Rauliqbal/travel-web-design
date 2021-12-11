window.addEventListener("scroll", function () {
    var nav = this.document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
});

// Swiper discover
var swiper = new Swiper(".discover-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
});
