import React from 'react';
import {connect} from 'react-redux';
import SliderProductsItem from "../Components/SliderProductItem";
import {addProductToCart} from '../redux/creators'
import {removeProductFromCart} from '../redux/creators'


const mapStateToProps = (state, props) => {
    let object = {
        card: state.Card.card,
        inCard: false,
        addToCartText: "Положить в корзину",
        cont: 1
    };
    state.Card.card.map((el, index, array) => {
        if (el.id === props.id) {
            object.inCard = true;
            object.addToCartText = "Убрать из корзины";
            object.count = el.count;
        }

    });
    return object;
};
const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id, count, price) => {
            dispatch(addProductToCart(id, count, price))
        },
        removeFromCart: (id) => {
            dispatch(removeProductFromCart(id))
        },

    };
};

export const WrappedSliderProductsItem = connect(mapStateToProps, mapDispatchToProps)(SliderProductsItem);
