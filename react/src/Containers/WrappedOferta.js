import React from 'react';
import Oferta from "../Components/layout/Popups/Oferta";
import {switchPopup} from "../redux/creators";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        popups: state.Popups.popups[0]
    }
};
const mapDispatchToProps = dispatch => {
    return {
        showHide: (name) => {
            dispatch(switchPopup(name))
        }
    }
};

export const WrappedOferta = connect(mapStateToProps, mapDispatchToProps)(Oferta);