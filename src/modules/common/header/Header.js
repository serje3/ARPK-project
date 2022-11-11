import { Navigation } from "./navigation";
import React from "react";
import { connect } from "react-redux";
import { fetchAll } from "../../../redux/actions";


class Header extends React.Component {
    componentDidMount() {
        // will set products and categories to store
        this.props.fetchAll()
    }

    render() {
        console.log('render header')
        return (
            <div className="main-header grid">
                <Navigation>
                    <Navigation.Page className="logo-header" path="/" reload={true}>ARPK</Navigation.Page>
                    <Navigation.Catalog categories={this.props.categories}/>
                    {/* onSubmit = default*/}
                    <Navigation.Search/>
                    <Navigation.Page className="home-header" path="/">Главная</Navigation.Page>
                    <Navigation.Page className="contacts-header" path="/contacts">Контакты</Navigation.Page>
                    <Navigation.Page className="about-header" path="/about">О нас</Navigation.Page>
                    <Navigation.HelpButton/>
                </Navigation>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    categories: state.api.categories || [],
    products: state.api.products || []
})

const mapDispatchToProps = {
    fetchAll
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)