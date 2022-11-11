import { Service } from "./Service";
import { meta, settings } from "../../settings";
import { ServiceCoast } from "./components/ServiceCoast";


const headerText = "Ремонт актуатора турбины в Крылатском"
const description = "Ремонт актуатора турбины 6NW009228, 6NW009420, 6NW009543, 6NW009660, 6NW0103002, 6NW0103006, 6NW0103010." +
    "Предлагаем нашим клиентам тестирование, ремонт, замену и настройку актуаторов турбины моделей Hella 6NW009228, 6NW009420, 6NW009543, 6NW009660, 6NW0103002, 6NW0103006, 6NW0103010, 6NW0103012 и других"
const serviceName = "Ремонт актуатора турбины (без з/ч)"
const serviceName2 = "Программирование верхней крышки"
const serviceCoast = 2500
const serviceCoast2 = 2500


export const RepairTurbo = () => {
    return (
        <Service
            meta={meta.getRepairTurbo()}
            route={settings.routes.RepairTurbo}
            header={headerText}
            description={description}
        >
            <ServiceCoast
                serviceName={serviceName}
                serviceCoast={serviceCoast}
            />
            <ServiceCoast
                serviceName={serviceName2}
                serviceCoast={serviceCoast2}
            />
        </Service>
    )
}