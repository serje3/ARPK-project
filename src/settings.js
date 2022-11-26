const routesWithParameter = {
    _product: '/product',
    _service: '/services',
    _post: '/news/post'
}

const routes = {
    Privacy: '/privacy',
    RepairEngine: '/service/repair-engine',
    RepairTurbo: '/service/repair-actuator-turbo',
    RepairDiesel: '/service/repair-diesel-injectors',
    Diagnostic: "/service/diagnostic-diesel-injectors",
    SearchedProducts: '/searched',
    OrderSuccess: '/order/success',
    Product: routesWithParameter._product + '/:id',
    Service: routesWithParameter._service + '/:id',
    Post: routesWithParameter._post + '/:id',
    Catalog: '/catalog',
    About: '/about',
    Contacts: '/contacts',
    News: '/news',
    Home: '/',
    getProductRoute: (id) => routesWithParameter._product + `/${id}`,
    getServiceRoute: (id) => routesWithParameter._service + `/${id}`,
    getPostRoute: (id) => routesWithParameter._post + `/${id}`,
}


export const settings = {
    routes: routes,
    contactEmail: 'napisat@arpk-m.ru',
    questionFormSelectorId: '#ask-question',
    yandexSmartCaptchaToken: process.env.REACT_YANDEX_API_CLIENT,
    apiUrl: process.env.REACT_API_URL || 'http://localhost:8000/api/',
}

export const meta = {
    getHome: () => ({
        title: "Продажа и ремонт форсунок и ТНВД в Москве",
        description: "Купить дизельные форсунки и ТНВД в Москве. Автозапчасти от производителей Siemens, Denso, BOSCH, Delphi. Диагностика, ремонт форсунок, турбины, двигателей и ходовой части"
    }),
    getCatalog: (description = "") => ({
        title: "Купить форсунки и ТНВД в Москве",
        description: `${description}Купить дизельные форсунки и ТНВД в Москве. Автозапчасти от производителей Siemens, Denso, BOSCH, Delphi.`
    }),
    getContacts: () => ({
        title: "Как нас найти",
        description: "ARPK номер телефона. Dieseldom номер телефона. Контакты. Время работы, номер телефона, email адрес. Местоположение. Яндекс карты"
    }),
    getAbout: () => ({
        title: "Информация о нас",
        description: "Информация о компании ARPK. Политика конфиденциальности."
    }),
    getDiagnostic: () => ({
        title: "Диагностика дизельных форсунок в Москве",
        description: "Мы предлагаем быструю и самое главное качественную диагностику дизельных форсунок"
    }),
    getRepairDiesel: () => ({
        title: "Ремонт дизельных форсунок в Москве",
        description: "Качественный ремонт дизельных форсунок это гарантия исправной работы двигателя и безопасности транспортного средства"
    }),
    getRepairTurbo: () => ({
        title: "Ремонт актуатора турбины в Москве",
        description: "Мы предлагаем быструю и самое главное качественную диагностику дизельных форсунок",
    }),
    getRepairEngine: () => ({
        title: "Ремонт двигателей и ходовой части",
        description: "Качественный ремонт двигателя и ходовой части в Москве, м.Крылатское"
    }),
    getServiceMeta: (service) => ({
        title: service.name,
        description: `${service.h2} ${service.description}`.slice(0, 250),
    }),
    getPrivacy: () => ({
        title: "Политика конфиденциальности ARPK",
        description: 'Информация об политике конфиденциальности ООО "Арк Партс"'
    })
}


export const serviceTable = {
    columns: [
        {
            Header: 'Вид работ',
            accessor: 'typeWork'
        },
        {
            Header: "Отечественные",
            accessor: 'domesticCoast'
        },
        {
            Header: "Иномарки",
            accessor: 'foreignCoast'
        }
    ],
    data: {
        RepairEngine: [{
            typeWork: 'КАПИТАЛЬНЫЙ РЕМОНТ ДВИГАТЕЛЯ',
            domesticCoast: '12 500-20 000',
            foreignCoast: ''
        }, {
            typeWork: 'СНЯТИЕ И УСТАНОВКА ДВИГАТЕЛЯ',
            domesticCoast: '6000-5000',
            foreignCoast: ''
        }, {
            typeWork: 'РЕГУЛИРОВКА КЛАПАНОВ',
            domesticCoast: '800-1000',
            foreignCoast: ''
        }, {
            typeWork: 'ЗАМЕНА ПОРШНЕВЫХ КОЛЕЦ',
            domesticCoast: '7500-5000',
            foreignCoast: ''
        }, {
            typeWork: 'ЗАМЕНА МАСЛОСЪЕМНЫХ КОЛПАЧКОВ',
            domesticCoast: '1800-3500',
            foreignCoast: ''
        }, {
            typeWork: 'ЗАМЕНА КЛАПАННОЙ ПРОКЛАДКИ',
            domesticCoast: '300-500',
            foreignCoast: ''
        }, {
            typeWork: 'ЗАМЕНА УСПОКОИТЕЛЯ ЦЕПИ',
            domesticCoast: '800-1300',
            foreignCoast: '1503-10 000'
        }, {
            typeWork: 'ЗАМЕНА РОЛИКА-НАТЯЖИТЕЛЯ',
            domesticCoast: '800-1800',
            foreignCoast: '1503-10 000'
        }, {
            typeWork: 'ЗАМЕНА БАШМАКА ЦЕПИ',
            domesticCoast: '2500',
            foreignCoast: '2500-25 000'
        }, {
            typeWork: 'ЗАМЕНА ЦЕПИ',
            domesticCoast: '2500',
            foreignCoast: '2500-25 000'
        }, {
            typeWork: 'ЗАМЕНА НАТЯЖИТЕЛЯ ЦЕПИ',
            domesticCoast: '300-1500',
            foreignCoast: '1500-10 000'
        }, {
            typeWork: 'РЕГУЛИРОВКА ЦЕПИ (НАТЯЖКА)',
            domesticCoast: '300-1500',
            foreignCoast: '500-5000'
        }, {
            typeWork: 'ЗАМЕНА ПЕРЕДНЕГО САЛЬНИКА (КОЛЕНВАЛА)',
            domesticCoast: '1500-2200',
            foreignCoast: '2500-25 000'
        }, {
            typeWork: 'ЗАМЕНА ЗАДНЕГО САЛЬНИКА (КОЛЕНВАЛА)',
            domesticCoast: 'З000-4500',
            foreignCoast: '2500-12 000'
        }, {
            typeWork: 'ЗАМЕНА САЛЬНИКА РАСПРЕДВАЛА',
            domesticCoast: '800-1500',
            foreignCoast: '500-5000'
        }, {
            typeWork: 'ЗАМЕНА РАСПРЕДВАЛА',
            domesticCoast: '1200-1800',
            foreignCoast: '2000-30 000'
        }, {
            typeWork: 'ЗАМЕНА ПРОКЛАДКИ ПОДДОНА',
            domesticCoast: '1000-1200',
            foreignCoast: '1030-5000'
        }, {
            typeWork: 'ЗАМЕНА МАСЛЯНОГО НАСОСА',
            domesticCoast: '1500-2500',
            foreignCoast: '1500-10 000'
        }, {
            typeWork: 'ЗАМЕНА РЕМНЯ ГЕНЕРАТОРА',
            domesticCoast: '400-1100',
            foreignCoast: '500-2500'
        }, {
            typeWork: 'ЗАМЕНА ПОМПЫ',
            domesticCoast: '2400',
            foreignCoast: '1 000-15 000'
        }, {
            typeWork: 'ЗАМЕНА ПРОКЛАДКИ ГОЛОВКИ БЛОКА',
            domesticCoast: '600',
            foreignCoast: '5000-11 000'
        }, {
            typeWork: 'ЗАМЕНА МАСЛА',
            domesticCoast: '300-1000',
            foreignCoast: '500-1500'
        }, {
            typeWork: 'ЗАМЕНА РЕМНЯ ГРМ',
            domesticCoast: '1900-4000',
            foreignCoast: '2500-15 000'
        }, {
            typeWork: 'ЗАМЕНА КОЛЛЕКТОРНЫХ ПРОКЛАДОК',
            domesticCoast: '2000-2500',
            foreignCoast: '1500-7000'
        }, {
            typeWork: 'ЗАМЕНА ОПОРЫ ДВИГАТЕЛЯ. 1 ШТ.',
            domesticCoast: '600-800',
            foreignCoast: '500-1200'
        }, {
            typeWork: 'ЗАМЕНА ОПОРЫ ДВИГАТЕЛЯ И КПП',
            domesticCoast: '800-900',
            foreignCoast: '500-1200'
        }, {
            typeWork: 'ЗАМЕР КОМПРЕССИИ В ЦИЛИНДРАХ',
            domesticCoast: '500-1200',
            foreignCoast: '500-3500'
        }, {
            typeWork: 'ЗАМЕНА ГОЛОВКИ БЛОКА ЦИЛИНДРОВ',
            domesticCoast: '6030',
            foreignCoast: '5000-10 000'
        }, {
            typeWork: 'ЗАМЕНА ГИДРОКОМПЕНСАТОРОВ ГЛАПАНОВ',
            domesticCoast: '4500',
            foreignCoast: '4000-9300'
        }, { typeWork: 'ЗАМЕНА РЕМНЯ ГИДРОУСИЛИТЕЛЯ', domesticCoast: '800', foreignCoast: '500-2600' },],
        RepairChassi: [{
            typeWork: 'ТЕХНИЧЕСКОЕ ОБСЛУЖИВАНИЕ',
            domesticCoast: '',
            foreignCoast: ''
        }, {
            typeWork: 'ЗАМЕНА МАСЛА В ДВИГАТЕЛЕ',
            domesticCoast: '300-1000',
            foreignCoast: '300-1500'
        }, {
            typeWork: 'ЗАМЕНА МАСЛА В ДВИГАТЕЛЕ С ПРОМЫВКОЙ',
            domesticCoast: '400-1200',
            foreignCoast: '400-2000'
        }, {
            typeWork: 'ЗАМЕНА МАСЛА В МКПП',
            domesticCoast: '500',
            foreignCoast: '500-1500'
        }, {
            typeWork: 'ЗАМЕНА МАСЛА В АКПП',
            domesticCoast: '-',
            foreignCoast: '1500-3000'
        }, {
            typeWork: 'ЗАМЕНА МАСЛА В МОСТУ',
            domesticCoast: '400',
            foreignCoast: '400-1500'
        }, {
            typeWork: 'ЗАМЕНА ВОЗДУШНОГО ФИЛЬТРА',
            domesticCoast: '100-200',
            foreignCoast: 'ОТ 200'
        }, {
            typeWork: 'ЗАМЕНА ТОПЛИВНОГО ФИЛЬТРА',
            domesticCoast: '100-500',
            foreignCoast: '500-1500'
        }, {
            typeWork: 'ЗАМЕНА САЛОННОГО ФИЛЬТРА',
            domesticCoast: '400-1000',
            foreignCoast: '200-2000'
        }, {
            typeWork: 'ЗАМЕНА ОХЛАЖДАЮЩЕЙ ЖИДКОСТИ (АНТИФРИЗА)',
            domesticCoast: '600',
            foreignCoast: '600-1500'
        }, {
            typeWork: 'ЗАМЕНА ТОРМОЗНОЙ ЖИДКОСТИ',
            domesticCoast: '600',
            foreignCoast: '600-1000'
        }, {
            typeWork: 'ПРОКАЧКА ТОРМОЗНОЙ СИСТЕМЫ',
            domesticCoast: '600',
            foreignCoast: '400-1000'
        }, {
            typeWork: 'ЗАМЕНА СВЕЧЕЙ ЗАЖИГАНИЯ (КОМ-КТ)',
            domesticCoast: '400',
            foreignCoast: 'ОТ 400'
        }, {
            typeWork: 'ЗАМЕНА ПЕРЕДНИХ ТОРМОЗНЫХ КОЛОДОК',
            domesticCoast: '500-1000',
            foreignCoast: '400-2500'
        }, {
            typeWork: 'ЗАМЕНА ЗАДНИХ ТОРМОЗНЫХ КОЛОДОК',
            domesticCoast: '700-1200',
            foreignCoast: '400-2500'
        }, {
            typeWork: 'ЗАМЕНА СЦЕПЛЕНИЯ',
            domesticCoast: '2500-6000',
            foreignCoast: '2500-15 000'
        }, {
            typeWork: 'ЗАМЕНА РЕМНЯ ГРМ',
            domesticCoast: '1200-1800',
            foreignCoast: '2500-15 000'
        }, {
            typeWork: 'ЗАМЕНА АМОРТИЗАТОРА',
            domesticCoast: '600-900',
            foreignCoast: '1000-3000'
        }, {
            typeWork: 'ЗАМЕНА 1-ОЙ ШАРОВОЙ',
            domesticCoast: '400-500',
            foreignCoast: '800-2500'
        }, {
            typeWork: 'ЗАМЕНА ВЕРШНЕГО РЫЧАГА',
            domesticCoast: '1000',
            foreignCoast: '1000-4000'
        }, {
            typeWork: 'ЗАМЕНА НИЖНЕГО РЫЧАГА',
            domesticCoast: '1000',
            foreignCoast: '1000-4000'
        }, {
            typeWork: 'ЗАМЕНА ПОДШИПНИКА СТУПИЦЫ',
            domesticCoast: '800',
            foreignCoast: '800-1200'
        }, {
            typeWork: 'ЗАМЕНА ВТУЛКИ СТАБИЛИЗАТОРА',
            domesticCoast: '500',
            foreignCoast: '500-1500'
        }, {
            typeWork: 'ЗАМЕНА ПЕРЕДНЕЙ ПРУЖИНЫ',
            domesticCoast: '600-900',
            foreignCoast: '1500-5000'
        }, {
            typeWork: 'ЗАМЕНА СТАБИЛИЗАТОРА',
            domesticCoast: '600',
            foreignCoast: '800-1200'
        }, {
            typeWork: 'ЗАМЕНА РАСТЯЖКИ',
            domesticCoast: '500',
            foreignCoast: '700'
        }, {
            typeWork: 'ЗАМЕНА ПЕРЕДНЕГО КРОНШТЕЙНА',
            domesticCoast: '400',
            foreignCoast: '1000'
        }, {
            typeWork: 'ЗАМЕНА СТУПИЦЫ',
            domesticCoast: '800',
            foreignCoast: '800-4000'
        }, {
            typeWork: 'ЗАМЕНА ЗАМЕНА ПЕРЕДНЕЙ БАЛКИ',
            domesticCoast: '2000-3000',
            foreignCoast: '4000'
        }, {
            typeWork: 'ЗАМЕНА ОПОРЫ СТОЕК',
            domesticCoast: '900',
            foreignCoast: '800-1000'
        }, {
            typeWork: 'ЗАМЕНА СТОЕК СТАБИЛИЗАТОРА',
            domesticCoast: '200-300',
            foreignCoast: '200-1000'
        }, {
            typeWork: 'ЗАМЕНА С.Б. ВЕРХНЕГО РЫЧАГА',
            domesticCoast: '1000',
            foreignCoast: '1000-2000'
        }, {
            typeWork: 'ЗАМЕНА С.Б. НИЖНЕГО РЫЧАГА',
            domesticCoast: '1200',
            foreignCoast: '1000-2500'
        }, { typeWork: 'РЕГУЛИРОВКА ПОДШИПНИКА', domesticCoast: '150', foreignCoast: '100-200' }]
    }
}
