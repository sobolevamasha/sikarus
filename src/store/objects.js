export default [
  {
    objects: [
      {
        name: "Дом класса А",
        img: require("@/assets/tmp/slide1.jpg"),
        location: "Московская область",
        date: "2022",
        description:
          "Осуществлена гидроизоляция  ПВХ-мембраной Sikaplan® WP 1100-20HL-RUS. Использование этой мембраны особенно актуально при наличии грунтовых вод, которые присутствуют на данном объекте. Швы гидроизоляции свариваются внахлест с помощью фенов с использованием прикаточных роликов.",
        mainPage: "N",
        to: '/objects'
      },
      {
        name: "Сельскохозяйственный комплекс АПХ «Мираторг»",
        img: require("@/assets/tmp/slide3.jpg"),
        location: "Черницыно, Октябрьский район, Курская область",
        date: "2020",
        description:
          "Устройство кровли с механической фиксацией, обустройство дорожек на кровле",
        mainPage: "Y",
        to: '/objects'
      },
      {
        name: "Жилой комплекс PRIME PARK",
        img: require("@/assets/tmp/slide1.jpg"),
        location: "г. Москва",
        date: "2019",
        description: "Гидроизоляция подземной части жилого комплекса",
        mainPage: "Y",
        to: '/objects'
      },
      {
        name: "Многофункциональный комплекс «Лахта-Центр»",
        img: require("@/assets/tmp/slide3.jpg"),
        location: "г. Санкт-Петербург",
        date: "2018",
        description:
          "Устройство кровли с механической фиксацией, обустройство дорожек на кровле",
        mainPage: "Y",
        to: '/objects',
        sliderItems: [
          {
            img: require("@/assets/tmp/sliderBig/lakhta-1.jpg"),
          },
          {
            img: require("@/assets/tmp/sliderBig/lakhta-2.jpg"),
          },
          {
            img: require("@/assets/tmp/sliderBig/lakhta-3.jpg"),
          },
          {
            img: require("@/assets/tmp/sliderBig/lakhta-4.jpg"),
          },
        ],
        about: [
          {
            head: "Заказчик",
            value: "АО «МФК Лахта центр»",
          },
          {
            head: "Подрядчик",
            value: "АО «Ренейссанс Констракшн»",
          },
          {
            head: "Площадь",
            value: "400 000 м2",
          },
          {
            head: "",
            value: "",
          },
          {
            head: "",
            value: "",
          },
        ],
        detailText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        name: "Музей русского импрессионизма",
        img: require("@/assets/tmp/slide1.jpg"),
        location: "г. Москва",
        date: "2018",
        description:
          "Звукопоглощающее полимерное покрытие Sika Comfortfloor Pro",
        mainPage: "Y",
        to: '/objects'
      },
    ],
    documents: [
      {
        name: "Референс Sika Россия по кровельным материалам",
        filePath: "",
      },
      {
        name: "Референс Sika Россия по полам и напольным покрытиям",
        filePath: "",
      },
    ],
  },
];
