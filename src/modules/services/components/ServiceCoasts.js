import { ServiceCoast } from "./ServiceCoast";


export const ServiceCoasts = (props) => {
  return (
      <>
      {
          props.prices.map((price, key) => (
              <ServiceCoast
                  key={key}
                  serviceName={price.name}
                  serviceCoast={price.price + price.unit}
              />
          ))
      }
      </>
  )
}