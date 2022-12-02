import { Service } from "./Service";
import { meta, serviceTable, settings } from "../../settings";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneService } from "../../redux/actions";
import { useEffect } from "react";
import { ServiceImages } from "./components/ServiceImages";
import { ServiceCoasts } from "./components/ServiceCoasts";
import { Details } from "../common/Details";
import { ServiceTableCoast } from "./components/ServiceTableCoast";


export const ServicePage = () => {
    let { id } = useParams()

    const dispatch = useDispatch()
    const service = useSelector(state => state.api.currentService)

    useEffect(() => {
        dispatch(fetchOneService(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    if (service.loading)
        return null

    return (
        <Service
            meta={meta.getServiceMeta(service)}
            route={settings.routes.getServiceRoute(id)}
            header={service.name}
            h2={service.h2}
            description={service.description}
        >

            <ServiceImages
                images={service.images || []}
            />
            {service.prices.length < 4 ?
                <ServiceCoasts
                    prices={service.prices || []}
                />
                :
                <Details summaryContent="Таблица цен">
                    <ServiceTableCoast columns={serviceTable.columns} data={service.prices.map(value => {
                        return {
                            typeWork: value.name,
                            domesticCoast: value.price,
                            foreignCoast: value.foreign_price
                        }
                    })}/>
                </Details>
            }

        </Service>
    )
}