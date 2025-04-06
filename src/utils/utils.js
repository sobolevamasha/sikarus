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

/*HEADER*/

/*Вкл/выкл бургер меню*/
export function onToggleBurgerMenu() {
  const toggleBtn = document.getElementById("toggleBurgerMenu");
  const burgerMenu = document.getElementById("burgerMenu");

  function toggleMenu() {
    burgerMenu.classList.toggle("burger-menu--opened");
    toggleBtn.classList.toggle("header__mobile--close-btn");
  }

  function closeMenu() {
    burgerMenu.classList.remove("burger-menu--opened");
    toggleBtn.classList.remove("header__mobile--close-btn");
  }

  toggleBtn.addEventListener("click", toggleMenu);

  const allLinks = document.getElementsByTagName("a");
  Array.from(allLinks).forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}
/*Вкл/выкл модалки*/
export function onToggleModal() {
  const openModalButton = document.getElementById("open-modal");
  const modalCountires = document.getElementById("modalCountires");
  const burgerMenu = document.querySelector(".burger-menu");
  const openModalDekstop = document.getElementById("openModalBtn");

  const closeButton = document.getElementById("close-modal");

  function toggleModal() {
    modalCountires.classList.toggle("active");
    burgerMenu.classList.toggle("burger-menu--zindex");
  }

  openModalButton.addEventListener("click", toggleModal);
  openModalDekstop.addEventListener("click", toggleModal);
  closeButton.addEventListener("click", toggleModal);
}
/*Тоггл сабайтемов в бургер меню */
export function onToggleInnerMenu() {
  const toggleBtn = document.querySelectorAll(".burger-menu__toggleInnerMenu");
  const menuSublist = document.querySelectorAll(".burger-menu__sublist");

  function toggleInnerMenu(event) {
    const index = Array.from(toggleBtn).indexOf(event.currentTarget);
    const correspondingSublist = menuSublist[index];

    if (correspondingSublist) {
      correspondingSublist.classList.toggle("active");
    }
  }
  toggleBtn.forEach((button) => {
    button.addEventListener("click", toggleInnerMenu);
  });
}
export function onToggleInnerSubMenu() {
  const toggleSubBtn = document.querySelectorAll(
    ".burger-menu__toggleInnerSubMenu"
  );
  const menuSubSublist = document.querySelectorAll(".burger-menu__subsublist");

  function toggleInnerMenu(event) {
    const index = Array.from(toggleSubBtn).indexOf(event.currentTarget);
    const correspondingSublist = menuSubSublist[index];

    if (correspondingSublist) {
      correspondingSublist.classList.toggle("active");
    }
  }
  toggleSubBtn.forEach((button) => {
    button.addEventListener("click", toggleInnerMenu);
  });
}
/*Тоггл подменю продукции в хедере */
export function onToggleProducts() {
  const toggleBtn = document.getElementById("toggleProducts");
  const productList = document.querySelector(".productItems");

  function toggleProducts() {
    productList.classList.toggle("active");
  }

  function closeProductList(event) {
    // Проверяем, был ли клик вне кнопки и списка продуктов
    if (
      !toggleBtn.contains(event.target) &&
      !productList.contains(event.target)
    ) {
      productList.classList.remove("active");
    }
  }

  toggleBtn.addEventListener("click", toggleProducts);
  document.addEventListener("click", closeProductList);
}
/*Тоггл подменю Моя SIKA */
export function onToggleCabinetitems() {
  const toggleBtn = document.querySelector(".header__dropdown--cabinet");
  const cabineItemtList = document.querySelector(
    ".header__dropdown--cabinet-item"
  );

  function toggleItems() {
    cabineItemtList.classList.toggle("active");
  }

  function closeItemList(event) {
    // Проверяем, был ли клик вне кнопки и списка продуктов
    if (
      !toggleBtn.contains(event.target) &&
      !cabineItemtList.contains(event.target)
    ) {
      cabineItemtList.classList.remove("active");
    }
  }

  toggleBtn.addEventListener("click", toggleItems);
  document.addEventListener("click", closeItemList);
}

/*Модалка countries*/
export function toggleRegions() {
  const regionsBtn = document.querySelectorAll(".toggleRegions");
  const countriesBtn = document.querySelectorAll(".toggleCountries");
  const regionList = document.querySelectorAll(".countries__section--countries");
  const countriesLinks = document.querySelectorAll(".countries__section--linkList");

  function toggleCountries(event) {
    const index = Array.from(regionsBtn).indexOf(event.currentTarget);
    const correspondingSublist = regionList[index];

    if (correspondingSublist) {
      correspondingSublist.classList.toggle("active");
    }
  }
  regionsBtn.forEach((button) => {
    button.addEventListener("click", toggleCountries);
  });

  function toggleCountryItems(event) {
    const index = Array.from(countriesBtn).indexOf(event.currentTarget);
    const correspondingSublist = countriesLinks[index];

    if (correspondingSublist) {
      correspondingSublist.classList.toggle("active");
    }
  }
  countriesBtn.forEach((button) => {
    button.addEventListener("click", toggleCountryItems);
  });


}
