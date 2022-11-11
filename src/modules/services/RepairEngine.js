import { Service } from "./Service";
import { meta, serviceTable, settings } from "../../settings";
import { ServiceTableCoast } from "./components/ServiceTableCoast";
import { Details } from "../common/Details";

const headerText = "Ремонт двигателей и ходовой части в Крылатском"
const description = "Прежде, чем приступать к ремонту , будет произведен целый комплекс диагностических процедур: " +
    "от компьютерной диагностики  до молоточной, буквально на слух будет проведена проверка работоспособности двигателя."


export const RepairEngine = () => {

    return (
        <>
            <Service
                meta={meta.getRepairEngine()}
                route={settings.routes.RepairEngine}
                header={headerText}
                description={description}
            >
                <Details summaryContent={"Таблица цен на починку двигателя"}>
                    <ServiceTableCoast
                        data={serviceTable.data.RepairEngine}
                    />
                </Details>
                <Details summaryContent={"Таблица цен на основные виды работ по ходовой части"}>
                    <p className="description p" style={{margin:'20px 0'}}>В таблице привидены цены на основные виды работ по замене определенных деталей. По некоторым позициям дана "вилка", т.к. окончательная стоимость зависит от модели вашего авто. Для более точного определения стоимости ремонта позвоните по телефону (495) 363-68-62  и мастер  определит сумму. Цены в рублях.</p>
                    <ServiceTableCoast
                        data={serviceTable.data.RepairChassi}
                    />
                </Details>
            </Service>
        </>
    )
}