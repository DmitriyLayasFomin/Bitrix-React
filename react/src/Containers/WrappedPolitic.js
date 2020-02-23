import React from 'react';
import Politic from "../Components/layout/Popups/Politic";
import {switchPopup} from "../redux/creators";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        popups: state.Popups.popups[1]
    }
};
const mapDispatchToProps = dispatch => {
    return {
        showHide: (name) => {
            dispatch(switchPopup(name))
        }
    }
};

export const WrappedPolitic = connect(mapStateToProps, mapDispatchToProps)(Politic);