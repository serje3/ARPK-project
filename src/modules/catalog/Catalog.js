import { Breadcrumb } from "modules/common/Breadcrumb";
import { NavigationProductsWithQuery, Products } from "./components";
import React from "react";
import { connect } from "react-redux";
import { useCatalogBreadcrumb } from "./components/hooks/useCatalogBreadcrumb";
import { Helmet } from "react-helmet-async";
import { meta } from "../../settings";


class Catalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            meta: meta.getCatalog()
        }
    }

    handleMeta = (description) => {
        return this.setState({ meta: meta.getCatalog(description) })
    }

    render() {
        return (
            <>
                <Helmet>
                    <title>{this.state.meta.title}</title>
                    <meta name="description" content={this.state.meta.description}/>
                    {/*    link canonical in NavigationProducts */}
                </Helmet>
                <div className="catalog-content grid">
                    <Breadcrumb usePageManager={useCatalogBreadcrumb}/>
                    <div className="catalog grid">
                        <NavigationProductsWithQuery
                            categories={this.props.categories}
                            handleMeta={this.handleMeta.bind(this)}
                        />
                        <Products>
                            <Products.Filter/>
                            <Products.Sort/>
                            <Products.List list={this.props.products}/>
                        </Products>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    categories: state.api.categories || [],
    products: state.api.products || []

})


export default connect(mapStateToProps)(Catalog)