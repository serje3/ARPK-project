import { HeadServices, ListServices } from "./components";


const Services = ({ children }) => (
    <div className="services-content grid">
        {children}
    </div>
)

Services.Header = HeadServices;
Services.List = ListServices;

export { Services }