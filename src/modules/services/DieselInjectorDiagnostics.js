import { meta, settings } from "../../settings";
import { Service } from "./Service";
import { ServiceCoast } from "./components/ServiceCoast";


const headerText = "Диагностика дизельных форсунок в Крылатском"
const description = "Признаки неисправности форсунок носят «скрытый» характер, т.к. затрудненный пуск, провалы мощности на различных оборотах, перегрев двигателя и другие неполадки не говорят однозначно о проблеме с форсунками... Мы предлагаем быструю и самое главное качественную диагностику дизельных форсунок"
const serviceName = "Диагностика дизельных форсунок (без з/ч)"
const serviceCoast = 700

export const DieselInjectorDiagnostics = () => {
    return (
        <Service
            meta={meta.getDiagnostic()}
            route={settings.routes.Diagnostic}
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