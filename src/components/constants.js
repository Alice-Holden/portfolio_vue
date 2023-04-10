export const MENU_ITEMS = {
    HOME:{
        title: 'Главная',
        path: '/',
    },
    ABOUT: {
        title: 'О нас',
        path: '/about',
    },
    MODULES:{
        title: 'Модули',
        path: '/',
        children:[
        {
            title: 'Конструктор форм',
            path: '/form-constructor',
        },
            {
            title: 'Расписание',
            path: '/schedule'
            }
        ]

    },
    CONTACT:{
        title: 'Контакты',
        path: '/',
    },
}