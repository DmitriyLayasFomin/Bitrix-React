import React from 'react';
import Header from "../Components/layout/Header";
import {addProductToCart, removeProductFromCart} from "../redux/creators";
import {connect} from "react-redux";
const mapStateToProps = (state) => {
    return {
        card: state.Card.card //верхний регистр потому что берется из combineReducers
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id,count,price) => {
            dispatch(addProductToCart(id,count,price))
        },
        removeFromCart: (id) => {
            dispatch(removeProductFromCart(id))
        },

    }
}

export const WrappedHeader = connect(mapStateToProps, mapDispatchToProps)(Header);