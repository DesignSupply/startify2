export class IntersectionObserverToggleClass {

  constructor(selector, className, toggle) {
    this.selector = selector;
    this.className = className;
    this.toggle = toggle;
    this.doObserve = (element) => {
      const targets = document.querySelectorAll(element);
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0
      };
      const observer = new IntersectionObserver((items) => {
        items.forEach((item) => {
          if(this.toggle) {
            if(item.isIntersecting) {
              item.target.classList.add(this.className);
            } else {
              item.target.classList.remove(this.className);
            }
          } else {
            if(item.isIntersecting) {
              item.target.classList.add(this.className);
            }
          }
        });
      }, options);
      Array.from(targets).forEach((target) => {
        observer.observe(target);
      });
    }
    this.doObserve(this.selector);
  }

}