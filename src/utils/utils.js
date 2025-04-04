export function scrollTo(id, offset = 0) {
  const el = typeof id === "string" ? document.getElementById(id) : id;
  const top = el.getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({
    top,
    behavior: "smooth",
  });
}
/*Аккордеоны*//**/
export function accordion() {
  const accordionHeaders = document.querySelectorAll(".accordion-header");
  const buttons = document.querySelectorAll(".download--btn");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const accordionItem = this.parentElement;
      const content = accordionItem.querySelector(".accordion-content");
      content.classList.toggle("active");

      const arrowElement = header.querySelector(".arrow");
      const isActive = arrowElement.classList.toggle("active");
      if (isActive) {
        arrowElement.classList.add("rotate");
      } else {
        arrowElement.classList.remove("rotate");
      }
    });
  });

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const isButtonActive = button.classList.toggle("download--btn--active");
    });
  });
}

/*Добавление класса на кнопку Добавить док в корзину\избранное*/
export function activeDownloadBtn() {
  const buttons = document.querySelectorAll(".download--btn");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const isButtonActive = button.classList.toggle("download--btn--active");
    });
  });
}
