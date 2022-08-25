import { createStore } from "vuex";

export default createStore({
  state: {
    portfolioPageData: [
      {
        id: 0,
        img: require("@/assets/img/my_works/min350x350/auto350x350.webp"),
        bigImg: require("@/assets/img/my_works/auto.webp"),
        title: "Сайт визитка автомастерской",
        alt: "auto",
        github: "",
        link: "",
        cost: "5`500 руб",
        stack: "HTML, CSS, JS",
        time: "4 дня",
        type:'Визитка'
      },
      {
        id: 1,
        img: require("@/assets/img/my_works/min350x350/grid350x350.webp"),
        bigImg: require("@/assets/img/my_works/grid.webp"),
        title: "Сайт визитка",
        alt: "grid",
        github: "",
        link: "",
        cost: "5`500 руб",
        stack: "HTML, CSS",
        time: "4 дня",
        type:'Визитка'
      },
      {
        id: 2,
        img: require("@/assets/img/my_works/min350x350/lawyer350x350.webp"),
        bigImg: require("@/assets/img/my_works/lawyer.webp"),
        title: "Сайт визитка адвоката",
        alt: "lawyer",
        github: "",
        link: "",
        cost: "5`500 руб",
        stack: "HTML, CSS",
        time: "4 дня",
        type:'Визитка'
      },
      {
        id: 3,
        img: require("@/assets/img/my_works/min350x350/dezinsector350x350.webp"),
        bigImg: require("@/assets/img/my_works/dezinsector.webp"),
        title: "Сайт визитка дезинсектора",
        alt: "dezinsector",
        github: "https://github.com/Egeny-Myasnikov/des38",
        link: "https://egeny-myasnikov.github.io/des38/",
        cost: "10`000 руб",
        stack: "HTML, CSS, JS",
        time: "7 дней",
        type:'Визитка'
      },
      {
        id: 4,
        img: require("@/assets/img/my_works/min350x350/meban350x350.webp"),
        bigImg: require("@/assets/img/my_works/meban.webp"),
        title: "Сайт каталог корпусной мебели",
        alt: "meban",
        github: "",
        link: "https://meban.ru/",
        cost: "15`000 руб",
        stack: "HTML, CSS, JS, WordPress",
        time: "10 дней",
        type:'Каталог'
      },
      {
        id: 5,
        img: require("@/assets/img/my_works/min350x350/portfolio350x350.webp"),
        bigImg: require("@/assets/img/my_works/portfolio.webp"),
        title: "Сайт визитка портфолио дизайнера",
        alt: "portfolio",
        github: "",
        link: "",
        cost: "5`000 руб",
        stack: "HTML, CSS",
        time: "4 дня",
        type:'Визитка'
      },
      {
        id: 6,
        img: require("@/assets/img/my_works/min350x350/zamokservis-angarsk350x350.webp"),
        bigImg: require("@/assets/img/my_works/zamokservis-angarsk.png"),
        title: "Сайт визитка аварийки",
        alt: "zamokservis-angarsk",
        github: "https://github.com/Egeny-Myasnikov/zamokservis-angarsk.ru",
        link: "https://zamokservis-angarsk.ru/",
        cost: "5`000 руб",
        stack: "HTML, CSS",
        time: "4 дня",
        type:'Визитка'
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
