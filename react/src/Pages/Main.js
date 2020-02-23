import React from 'react';
import {WrappedHeader} from "../Containers/WreppedHeader"
import {WrappedPopups} from "../Containers/WreppedPopups"
import {WrappedFooter} from "../Containers/WreppedFooter"
import jsonMenu from '../ServerResponsJson/menu.json'
import jsonProductsSlider from '../ServerResponsJson/ProductsItem'
import Menu from "../Components/Menu"
import SliderProducts from "../Components/SliderProducts"
import {store} from "../redux/configureStore"
import {getCardFromApi} from "../redux/creators"
import card from "../ServerResponsJson/shopCard"
import axios from "axios";




store.dispatch(getCardFromApi(card));


class Main extends React.Component{
    constructor(props)
    {
        super(props);
        this.url = '/api.php';
        this.state = {menu: []};
        this.httpRequest('getMenu');


    }
    componentDidMount() {
        this.httpRequest('getMenu');

    }
    httpRequest = (command) => {
        let params = {command: command};
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
                self.setState({menu:response.data});
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        return (
            <div>
                <WrappedHeader/>
                <Menu data={this.state.menu}/>
                <SliderProducts data={jsonProductsSlider.products}/>
                <WrappedFooter/>
                <WrappedPopups/>
            </div>


        );
    }


}

export default Main;