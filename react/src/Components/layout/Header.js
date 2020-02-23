import React from 'react';
import Top from './Header/Top.js';
import Menu from "./Header/Menu.js";
import Banner from "./Header/Banner";
import json from '../../ServerResponsJson/banner.json';
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        card: state.Card.card //верхний регистр потому что берется из combineReducers
    }
}


const WrappedTop = connect(mapStateToProps)(Top)

class Header extends React.Component {
    constructor(props){
        super(props);
        if(window.location.pathname==='/'){

            let data = json;
            this.banner = <Banner data={json}/>
        }else{
            this.banner = null;
        }
    }


    render() {



        return (
            <div>
                <WrappedTop/>
                {this.banner}
                <Menu />

            </div>


        );
    }
}
export default Header;
