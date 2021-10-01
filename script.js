class myslider {
  constructor(selector, switchingTime) {
    this.switchingTime = switchingTime * 1000;
    this.slides = document.querySelectorAll(selector);
    this.slides.forEach((element) => {
      element.addEventListener("click", this.activeSlide);
    });
    this.runTimerSlide();
  }

  runTimerSlide = () => {
    this.interval = setInterval(this.functonTimer, this.switchingTime);
  };

  functonTimer = () => {
    let IndexActiveSlide = this.searchActive();
    this.clearActive();
    switch (IndexActiveSlide) {
      case -1:
        this.slides[0].classList.toggle("active");
        break;
      case this.slides.length - 1:
        break;
      default:
        this.slides[++IndexActiveSlide].classList.toggle("active");
        break;
    }
  };

  searchActive = () => {
    let index = -1;
    this.slides.forEach((slide, key) => {
      if (slide.classList.contains("active")) {
        index = key;
      }
    });
    return index;
  };

  activeSlide = (el) => {
    const element = el.currentTarget;
    this.interval = clearInterval(this.interval);
    this.Timeout = clearTimeout(this.Timeout);
    if (!element.classList.contains("active")) {
      this.clearActive();
    }
    element.classList.toggle("active");
    this.Timeout = setTimeout(this.runTimerSlide, this.switchingTime);
  };

  clearActive = () => {
    this.slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  };
}

let newslide = new myslider(".slide", 5);
