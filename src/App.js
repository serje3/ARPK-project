import { Header, Footer } from "./modules/common"
import { Home } from "./modules/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catalog from "./modules/catalog/Catalog";
import { About } from "./modules/about/About";
import { Contacts } from "./modules/contacts/Contacts";
import { Product } from "./modules/product/Product";
import { OrderSuccess } from "./modules/product/OrderSuccess";


function App() {
    return (
        <BrowserRouter>
            <div className="wrapper grid">
                <Header/>
                <Routes>
                    <Route path="/order/success" element={<OrderSuccess/>}/>
                    <Route path="/product/:id" element={<Product/>}/>
                    <Route path="/catalog" element={<Catalog/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/" element={<Home/>}/>
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
