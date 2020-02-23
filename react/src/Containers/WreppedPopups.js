import React from 'react';
import Popups from "../Components/layout/Popups";
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

export const WrappedPopups = connect(mapStateToProps, mapDispatchToProps)(Popups);