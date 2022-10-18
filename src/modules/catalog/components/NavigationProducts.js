import React from "react";
import ListCategories from "./ListCategories";
import { withQuery } from "hoc/withQuery";
import { connect } from "react-redux";
import { fetchSubcategories, resetSubcategories } from "../../../redux/actions";


class NavigationProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: parseInt(props.query.get('category-id')) || 0,
        }
    }

    shouldShowBrends(currentCategory) {
        return this.state.category === currentCategory.id && this.props.subcategories.length !== 0
    }

    handleCategory(currentCategory) {
        this.setState({ category: currentCategory.id })
    }


    componentDidMount() {
        if (this.state.category !== 0 && !isNaN(this.state.category)) {
            this.props.fetchSubcategories(this.state.category)
        }
    }

    componentDidUpdate(prevProps, prevState, snap) {
        const category = parseInt(this.props.query.get('category-id'));
        if (!isNaN(this.state.category) && category !== 0 && parseInt(prevProps.query.get('category-id')) !== category) {
            this.handleCategory({ id: category })
        } else if ((category === 0 && this.props.subcategories.length !== 0) ||
            (isNaN(this.state.category) && this.props.subcategories.length !== 0)) {
            this.props.resetSubcategories()
        }
        if (prevState.category !== this.state.category && !isNaN(this.state.category)) {
            this.props.fetchSubcategories(this.state.category)
        }
    }

    findCategoryName = () => {
        console.log(this.props.categories)
        const category = this.props.categories.find((value) => value.id === this.state.category)
        if (category === undefined)
            return "Ошибка"
        return category.name
    }

    render() {
        return (
            <div className="navigation_catalog">
                <div className="head_navigation flex">{
                    this.state.category === 0 || !this.props.query.get('category-id') || this.props.categories.length === 0 ?
                        "Каталог"
                        :
                        this.findCategoryName()
                }</div>
                <ListCategories
                    categories={this.props.categories}
                    subcategories={this.props.subcategories}
                    handleCategoryClick={this.handleCategory.bind(this)}
                    shouldShowBrends={this.shouldShowBrends.bind(this)}
                />
            </div>
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