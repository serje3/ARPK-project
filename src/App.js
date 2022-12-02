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
import { Privacy } from "./modules/privacy/Privacy";
import { ServicePage } from "./modules/services/ServicePage";
import { NewsPage } from "./modules/news/NewsPage";
import { PostPage } from "./modules/news/PostPage";
import { NotFound404 } from "./modules/404/NotFound404";


function App() {
    const routes = settings.routes
    return (
        <BrowserRouter>
            <div className="wrapper grid">
                <Header/>
                <Routes>
                    <Route path={routes.Post} element={<PostPage/>}/>
                    <Route path={routes.News} element={<NewsPage/>}/>
                    <Route path={routes.Privacy} element={<Privacy/>}/>
                    <Route path={routes.SearchedProducts} element={<SearchedProducts/>}/>
                    <Route path={routes.OrderSuccess} element={<OrderSuccess/>}/>
                    <Route path={routes.Product} element={<Product/>}/>
                    <Route path={routes.Service} element={<ServicePage/>}/>
                    <Route path={routes.Catalog} element={<Catalog/>}/> {/* meta done*/}
                    <Route path={routes.About} element={<About/>}/> {/* meta done*/}
                    <Route path={routes.Contacts} element={<Contacts/>}/> {/* meta done*/}
                    <Route path={routes.Home} element={<Home/>}/> {/* meta done*/}
                    <Route path={routes.NotFound404} element={<NotFound404/>}/>
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
