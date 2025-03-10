//import config from '../config'

let state = {

    response: {},	// объект ответа от БЕ в чистом виде
    session: {},	// данные текущей сессии
    common: {},			// общие для всех страниц
    page: {},			// индивидуальные для каждой страницы
    currentPage: {},	// текущая страница
    isLoading: false,


};

export default state;
