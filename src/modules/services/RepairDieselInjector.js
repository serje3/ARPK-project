import { meta, settings } from "../../settings";
import { Service } from "./Service";
import { ServiceCoast } from "./components/ServiceCoast";


const headerText = "Ремонт дизельных форсунок в Крылатском"
const description = "Наш сервис готов предложить Вам своим услуги по диагностике дизельных форсунок. " +
    "а также произвести качественный ремонт форсунок. Качественный ремонт это гарантия исправной работы двигателя" +
    "и безопасности транспортного средства."
const serviceName = "Ремонт дизельных форсунок (без з/ч)"
const serviceCoast = 2500

export const RepairDieselInjector = () => {
    return (
        <Service
            meta={meta.getRepairDiesel()}
            route={settings.routes.RepairDiesel}
            header={headerText}
            description={description}
        >
            <ServiceCoast
                serviceName={serviceName}
                serviceCoast={serviceCoast}
            />
        </Service>
    )
}