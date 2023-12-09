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

document.addEventListener("DOMContentLoaded", () => {
  renderProject();
})

document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  const dataText = [
    "Bienvenue à",
    "ようこそ",
    "어서 오십시오",
    "Καλώς ήρθατε",
    "Selamat Datang",
    "Hoş geldiniz",
    "स्वागत छ",
    "Welcome To"
  ];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
    document.getElementById("typeWriter").innerHTML = text.substring(0, i + 1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (typeof dataText[i] == 'undefined'){
      setTimeout(function() {
        StartTextAnimation(0);
      }, 20000);
    }

    // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function(){
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }

 // start the text animation
  StartTextAnimation(0);
});
