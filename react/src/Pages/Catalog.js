import React from 'react';
import axios from 'axios';
import {WrappedHeader} from "../Containers/WreppedHeader"
import {WrappedPopups} from "../Containers/WreppedPopups"
import {WrappedFooter} from "../Containers/WreppedFooter"
import jsonProductsSlider from '../ServerResponsJson/ProductsItem'
import jsonRecentlyViewed from '../ServerResponsJson/recentlyViewed'
import Products from "../Components/Products"
import {store} from "../redux/configureStore"
import {getCardFromApi} from "../redux/creators"
import card from "../ServerResponsJson/shopCard"
import SliderProducts from "../Components/SliderProducts";
import BreadCrumbs from "../Components/BreadCrumbs";
import Search from "../Components/Search";


store.dispatch(getCardFromApi(card));

class Catalog extends React.Component {
    constructor(props) {
        super(props);
        this.url = '/api.php';
        this.state = {
            search: '',
            code:'',
            categoryName:'',
            page: this.getUrlParamsPage(window.location.href),
            products: null,
            breadcrumbs:''
        };
        this.dataExchange('getCatalog','');
        console.log(props);

    }

    changeSearch = (text) => {
        window.history.pushState('', '', window.location.pathname+'?page=1&search='+text);
        this.changeState([],[]);
        this.dataExchange('getCatalog',text);
    };



    getUrlParamsPage = (string) =>{
        let url = new URL(string);
        let page = url.searchParams.get('page');
        page === null ? page = 1 : void 0;
        return page;
    };
    getUrlParamsSearch = (string) =>{
        let url = new URL(string);
        let page = url.searchParams.get('search');
        page === null ? page = 1 : void 0;
        return page;
    };



//-------------------------------------------- Обмен данными -----------------------
    dataExchange = (command, searchText)=>{
        let params = {
            command: command,
            search: searchText,
            code: this.props.match.params.code || '',
            page: this.getUrlParamsPage(window.location.href),
        };
        this.httpRequest(params);

    };
    httpRequest = (params) => {
        let self = this;
        let form = new FormData();
        for (let prop in params) {
            form.set(prop, params[prop]);
        }

        axios({
            method: 'post',
            url:this.url,
            data:form})
            .then(function (response) {
                if(response.data.additional !== null && response.data.products.length>0) {
                    self.changeState(response.data.additional, response.data.products);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    changeState = (additional,products)=>{
        this.setState({
            code:additional.code,
            search: additional.search,
            categoryName:additional.categoryName,
            page: additional.page,
            products: <Products
                search={this.getUrlParamsSearch(window.location.href)}
                categoryName={additional.categoryName}
                amount={additional.amount}
                code={additional.code}
                data={products}
                page={additional.page}/>,
            breadcrumbs: <BreadCrumbs crumbs={[
                {name:"Главная", code:""},
                {name:"Каталог", code:"catalog"},
                {name:additional.categoryName, code:additional.code},
            ]}
                />
        });
    };
    //------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <WrappedHeader/>
                <div className="container ">
                    {this.state.breadcrumbs}
                    <Search changeSearch={this.changeSearch}/>
                </div>
                {this.state.products}
                <SliderProducts data={jsonRecentlyViewed}/>
                <WrappedFooter/>
                <WrappedPopups/>
            </div>


        );
    }


}

export default Catalog;