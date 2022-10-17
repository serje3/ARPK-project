import { Navigation } from "./navigation";
import { Catalog } from "./navigation/components";
import React from "react";
import { connect } from "react-redux";
import { fetchCategories } from "../../../redux/actions";


class Header extends React.Component {
    componentDidMount() {
        this.props.fetchCategories();
    }

    render() {
        return (
            <div className="main-header grid">
                <Navigation>
                    <Navigation.Page className="logo-header" path="/" reload={true}>ARPK</Navigation.Page>
                    <Navigation.Catalog>
                        <Catalog.Overlay/>
                        <Catalog.Modal categories={this.props.categories}/>
                    </Navigation.Catalog>
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
})

const mapDispatchToProps = {
    fetchCategories
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)