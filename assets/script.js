new Swiper(".mainSwiper", {
  direction: "vertical",
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  mousewheel: {
    invert: false,
  },
  keyboard: {
    enabled: true,
  },
  speed: 1500,
});

new Swiper(".projectSwiper", {
  direction: "horizontal",
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 10,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const projects = [
  {
    id: 0,
    name: "Find Animelist",
    image: "find-animelist",
    link: "https://find-animelist.netlify.app"
  },
  {
    id: 1,
    name: "Jankenpon Game",
    image: "jankenpon-game",
    link: "https://jankenpon-game.netlify.app/"
  },
  {
    id: 2,
    name: "Jion",
    image: "jion",
    link: "https://jion.netlify.app/"
  },
  {
    id: 3,
    name: "Mustache Money Management",
    image: "mustache-money-management",
    link: "https://github.com/yadija/mustache-money-management"
  }
]

function renderProject() {
  projects.forEach(project => {
    const section = document.createElement("section");
    section.classList.add("swiper-slide");
    section.innerHTML = `
      <section class="swiper-slide">
        <section class="section-project__content-article">
          <img src="assets/images/projects/${project.image}.png" alt=${project.name} class="section-project__content-article__image">
          <h3 class="section-project__content-article__title">
            <a href=${project.link} target="_blank" class="section-project__content-article__title-link">${project.name}</a>
          </h3>
        </section>
      </section>
    `
    document.getElementById("projectSwiper").appendChild(section);
  })
}

window.addEventListener("load", renderProject);
