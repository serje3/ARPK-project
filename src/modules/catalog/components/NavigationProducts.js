import React from "react";
import ListCategories from "./ListCategories";
import { withQuery } from "hoc/withQuery";
import { connect } from "react-redux";
import { fetchSubcategories, resetSubcategories } from "../../../redux/actions";
import { Helmet } from "react-helmet-async";
import { settings } from "../../../settings";


class NavigationProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryId: parseInt(props.query.get('category-id')) || 0,
        }
    }

    shouldShowBrends(currentCategory) {
        return this.state.categoryId === currentCategory.id && this.props.subcategories.length !== 0
    }

    handleSetCategory(currentCategory) {
        this.setState({ categoryId: currentCategory.id })
    }

    handleMetaCategories() {
        const category = this.findCategory()
        if (category) {
            this.props.handleMeta(`${category.name}. `)
        } else {
            // reset meta description
            this.props.handleMeta()
        }
    }


    componentDidMount() {
        if (this.state.categoryId !== 0 && !isNaN(this.state.categoryId)) {
            this.props.fetchSubcategories(this.state.categoryId)
        }
    }

    componentDidUpdate(prevProps, prevState, snap) {
        const categoryId = parseInt(this.props.query.get('category-id'));
        if (!isNaN(this.state.categoryId) && categoryId !== 0 && parseInt(prevProps.query.get('category-id')) !== categoryId) {
            this.handleSetCategory({ id: categoryId })
        } else if ((categoryId === 0 && this.props.subcategories.length !== 0) ||
            (isNaN(this.state.categoryId) && this.props.subcategories.length !== 0)) {
            this.props.resetSubcategories()
        }
        if (prevState.categoryId !== this.state.categoryId && !isNaN(this.state.categoryId)) {
            this.handleMetaCategories()
            this.props.fetchSubcategories(this.state.categoryId)
        }
    }

    findCategory = () => {
        return this.props.categories.find((value) => value.id === this.state.categoryId)
    }

    findCategoryName = () => {
        if (this.state.categoryId === 0 || !this.props.query.get('category-id') || this.props.categories.length === 0) {
            return "Каталог"
        } else {
            const category = this.findCategory()
            if (!category)
                return "Ошибка"
            return category.name
        }
    }

    getCanonialHref() {
        let route = settings.routes.Catalog
        const categoryId = this.props.query.get('category-id')
        const subcategoryId = this.props.query.get('subcategory-id')

        if (categoryId) {
            route += `?category-id=${categoryId}`
            if (subcategoryId)
                route += `&subcategory-id=${subcategoryId}`
        }
        return route
    }

    render() {
        return (
            <>
                <Helmet>
                    <link rel="canonical" href={this.getCanonialHref()}/>
                </Helmet>
                <div className="navigation_catalog">
                    <h1 className="head_navigation flex">{
                        this.findCategoryName()
                    }</h1>
                    <ListCategories
                        categories={this.props.categories}
                        subcategories={this.props.subcategories}
                        handleCategoryClick={this.handleSetCategory.bind(this)}
                        shouldShowBrends={this.shouldShowBrends.bind(this)}
                    />
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    subcategories: state.api.subcategories || []
})

const mapDispatchToProps = {
    fetchSubcategories,
    resetSubcategories
}

export default connect(mapStateToProps, mapDispatchToProps)(withQuery(NavigationProducts))