import { Breadcrumb } from "modules/common/Breadcrumb";
import { NavigationProductsWithQuery, Products } from "./components";
import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../redux/actions";
import { useCatalogBreadcrumb } from "./components/hooks/useCatalogBreadcrumb";


class Catalog extends React.Component {
    #counter = 0

    componentDidMount() {
        if (this.props.products.length === 0)
            this.props.fetchProducts();
    }

    render() {
        this.#counter++;
        console.log('render ', this.#counter)

        return (
            <div className="catalog-content grid">
                <Breadcrumb usePageManager={useCatalogBreadcrumb}/>
                <div className="catalog grid">
                    <NavigationProductsWithQuery categories={this.props.categories}/>
                    <Products>
                        <Products.Filter/>
                        <Products.Sort/>
                        <Products.List list={this.props.products}/>
                    </Products>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    categories: state.api.categories || [],
    products: state.api.products || []

})

const mapDispatchToProps = {
    fetchProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog)