//import config from '../config'

let state = {

    response: {},	// объект ответа от БЕ в чистом виде
    session: {},	// данные текущей сессии
    common: {},			// общие для всех страниц
    page: {},			// индивидуальные для каждой страницы
    currentPage: {},	// текущая страница
    isLoading: false,


    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
    headerHeight: 64,
    withBurgerMenu: false,
    withProductMenu: false

};

export default state;
