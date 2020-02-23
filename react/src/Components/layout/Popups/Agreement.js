import React from 'react';
import cancel from "../../../assets/img/cancel (2).svg";
import {store} from "../../../redux/configureStore";


class Agreement extends React.Component {
    constructor(props){
        super(props);
        this.state={
            modalClass:"modal fade"
        }

    }
    componentDidMount() {
        store.subscribe(this.listen);
    }
    listen = () => {
        this.props.popups.value === true ? this.setState({modalClass:"modal fade show"}) : this.setState({modalClass:"modal fade"});
    };


    render() {
        return (

            /*<!--------------------------------------------------условия оферты------------------------------------------------->*/
            <div className={this.state.modalClass} id="myModal4">

                            <div className="modal-dialog">
                                <div className="modal-content">
                                    {/*<!-- Modal Header -->*/}
                                    <div className="modal-header">
                                        <h4 className="modal-title">Пользовательское соглашение</h4>
                                        <button onClick={()=>{this.props.showHide("soglasie");}} type="button" className="close" data-dismiss="modal">
                                            <img src={cancel} alt="/" className="close-img"/></button>
                                    </div>
                                    {/*<!-- Modal body -->*/}
                                    <div className="modal-body modal-body-center w-100">
                                        <p className="modal-bottom-p modal-bottom-p-l">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                            mollit anim id est laborum.
                                        </p>
                                    </div>
                                    {/*<!-- Modal footer -->*/}
                                    <div className="modal-footer">
                                    </div>
                                </div>
                            </div>
            </div>

        );
    }


}

export default Agreement;