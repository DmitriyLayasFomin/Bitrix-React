import React from 'react';
import Footer from "../Components/layout/Footer";
import {switchPopup} from "../redux/creators";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        popups: state.Popups.popups
    }
}
const mapDispatchToProps = dispatch => {
    return {
        showHide: (name) => {
            dispatch(switchPopup(name))
        }
    }
};

export const WrappedFooter = connect(mapStateToProps, mapDispatchToProps)(Footer);