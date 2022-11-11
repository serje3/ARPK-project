import { Header, Footer } from "./modules/common"
import { Home } from "./modules/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catalog from "./modules/catalog/Catalog";
import { About } from "./modules/about/About";
import { Contacts } from "./modules/contacts/Contacts";
import { Product } from "./modules/product/Product";
import { OrderSuccess } from "./modules/product/OrderSuccess";
import { SearchedProducts } from "./modules/searched-products/SearchedProducts";
import { settings } from "./settings";
import { DieselInjectorDiagnostics } from "./modules/services/DieselInjectorDiagnostics";
import { RepairDieselInjector } from "./modules/services/RepairDieselInjector";
import { RepairTurbo } from "./modules/services/RepairTurbo";
import { RepairEngine } from "./modules/services/RepairEngine";
import { Privacy } from "./modules/privacy/Privacy";


function App() {
    const routes = settings.routes
    return (
        <BrowserRouter>
            <div className="wrapper grid">
                <Header/>
                <Routes>
                    <Route path={routes.Privacy} element={<Privacy/>}/>
                    <Route path={routes.RepairEngine} element={<RepairEngine/>}/> {/* meta done*/}
                    <Route path={routes.RepairTurbo} element={<RepairTurbo/>}/> {/* meta done*/}
                    <Route path={routes.RepairDiesel} element={<RepairDieselInjector/>}/> {/* meta done*/}
                    <Route path={routes.Diagnostic} element={<DieselInjectorDiagnostics/>}/> {/* meta done*/}
                    <Route path={routes.SearchedProducts} element={<SearchedProducts/>}/>
                    <Route path={routes.OrderSuccess} element={<OrderSuccess/>}/>
                    <Route path={routes.Product} element={<Product/>}/>
                    <Route path={routes.Catalog} element={<Catalog/>}/> {/* meta done*/}
                    <Route path={routes.About} element={<About/>}/> {/* meta done*/}
                    <Route path={routes.Contacts} element={<Contacts/>}/> {/* meta done*/}
                    <Route path={routes.Home} element={<Home/>}/> {/* meta done*/}
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
