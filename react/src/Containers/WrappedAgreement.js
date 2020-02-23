import React from 'react';
import Agreement from "../Components/layout/Popups/Agreement";
import {switchPopup} from "../redux/creators";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        popups: state.Popups.popups[2]
    }
};
const mapDispatchToProps = dispatch => {
    return {
        showHide: (name) => {
            dispatch(switchPopup(name))
        }
    }
};

export const WrappedAgreement = connect(mapStateToProps, mapDispatchToProps)(Agreement);