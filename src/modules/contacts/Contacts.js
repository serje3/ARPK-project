import { meta, settings } from "../../settings";
import { Helmet } from "react-helmet-async";


const _meta = meta.getContacts()

export const Contacts = () => {
    return (
        <>
            <Helmet>
                <title>{_meta.title}</title>
                <meta name="description" content={_meta.description}/>
                <link rel="canonical" href={settings.routes.Contacts}/>
            </Helmet>
            <div className="contacts-content page grid">
                <h1 className="h3">Контакты и время работы</h1>
                <div className="contacts_info_content flex">
                    <div className="info flex">
                        <h2 className="h4">Время работы:</h2>
                        <p className="p">Понедельник-Пятница: <strong>с 10:00 до 19:00</strong></p>
                        <p className="p">Суббота-Воскресенье: <strong>с 11:00 до 19:00</strong></p>
                    </div>
                    <div className="info flex">
                        <h2 className="h4">Связь с нами:</h2>
                        <p className="p">Основной: <strong>+7 (495) 363-68-62</strong></p>
                        <p className="p">Мегафон: <strong>+7 (926) 025-43-60</strong></p>
                        <p className="p">Билайн: <strong>+7 (963) 690-81-78</strong></p>
                        <p className="p">Наш email: <strong>{settings.contactEmail}</strong></p>
                    </div>
                    <div className="info flex">
                        <h2 className="h4">Адрес</h2>
                        <p className="p">121609 , г. Москва ул. Осенняя д.23 , этаж 9 , офис 35</p>
                    </div>
                    <div style={{ position: 'relative', overflow: 'hidden' }}><a
                        href="https://yandex.ru/maps/org/dieseldom_ru/1718128198/?utm_medium=mapframe&utm_source=maps"
                        style={{ color: '#eee', fontSize: 12, position: 'absolute', top: 0 }}>Dieseldom.ru</a><a
                        href="https://yandex.ru/maps/213/moscow/category/auto_parts_and_accessories_store/184105320/?utm_medium=mapframe&utm_source=maps"
                        style={{ color: '#eee', fontSize: 12, position: 'absolute', top: 14 }}>Магазин автозапчастей и
                        автотоваров в
                        Москве</a><a
                        href="https://yandex.ru/maps/213/moscow/category/auto_repair_shop/184105246/?utm_medium=mapframe&utm_source=maps"
                        style={{ color: '#eee', fontSize: 12, position: 'absolute', top: 28 }}>Автосервис, автотехцентр
                        в
                        Москве</a>
                        <iframe title="Яндекс карты" src="https://yandex.ru/map-widget/v1/-/CCU6ULXFCB" height="400"
                                frameBorder="1"
                                allowFullScreen="true" style={{ position: 'relative' }}/>
                    </div>
                </div>
            </div>
        </>
    )
}