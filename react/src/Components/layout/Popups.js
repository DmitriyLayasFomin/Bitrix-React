import React from 'react';
import scroll from "../../assets/img/up.png";
import Recall from "./Popups/Recall";
import OrderSubmit from "./Popups/OrderSubmit";
import OrderSuccess from "./Popups/OrderSuccess";
import OrderError from "./Popups/OrderError";
import Bonus from "./Popups/Bonus";
import Feedback from "./Popups/Feedback";
import {WrappedOferta} from "../../Containers/WrappedOferta";
import {WrappedAgreement} from "../../Containers/WrappedAgreement";
import {WrappedPolitic} from "../../Containers/WrappedPolitic";



class Popups extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <a href="#" className="scrollup"><img src={scroll} alt="/"/></a>
                <Recall/>
                <OrderSubmit/>
                <OrderSuccess/>
                <OrderError/>
                <Bonus/>
                <Feedback/>
                <WrappedOferta />
                <WrappedAgreement />
                <WrappedPolitic />
            </div>


        );
    }


}

export default Popups;