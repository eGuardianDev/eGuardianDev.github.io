function changeCss () {
    var navElement = document.querySelector("nav");
    this.scrollY > window.innerHeight ? navElement.style.opacity = .8 : navElement.style.opacity = 1;
  }
  
  window.addEventListener("scroll", changeCss , false);