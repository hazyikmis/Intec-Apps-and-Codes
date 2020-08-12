const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  burger.addEventListener("click", () => {
    //toggle nav
    nav.classList.toggle("nav-active");
    //animate links
    const navLinks = document.querySelectorAll(".nav-links li");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 5 + 0.5
        }s`; //last part is delay
        // console.log(index / 7);
        //"forwards" is IMPORTANT to retain the last style from animation
      }
    });
    //burger animation
    burger.classList.toggle("toggle");
  });

  //when window expanded while the menu still open, this code below closes the menu
  window.addEventListener("resize", () => {
    // console.log(this.innerWidth, this.innerHeight);
    if (this.innerWidth > 768) {
      const nav = document.querySelector(".nav-links");
      if (nav.classList.contains("nav-active")) {
        const burger = document.querySelector(".burger");
        burger.click();
      }
    }
  });
};

navSlide();
