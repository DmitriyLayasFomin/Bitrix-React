import React from 'react';
import cancel from "../../../assets/img/cancel (2).svg";
import tray from "../../../assets/img/tray.svg";

class OrderSubmit extends React.Component{


    render() {
        return (
            /*<!--------------------------------------------------------успешно согласовон-------------------------------------------->*/
            <div className="modal fade" id="myModal2">
                <div className="modal-dialog">
                    <div className="modal-content">
                        // {/*<!-- Modal Header -->*/}
                        <div className="modal-header">
                            <h4 className="modal-title"></h4>
                            <button type="button" className="close" data-dismiss="modal"><img src={cancel} alt="/" className="close-img"/></button>
                        </div>
                        {/* <!-- Modal body -->*/}
                        <div className="modal-body modal-body-center w-100">
                            <img src={tray} alt="/" className="tray"/>
                        </div>
                        {/* <!-- Modal footer -->*/}
                        <div className="modal-footer">
                            <p className="modal-bottom-p modal-bottom">
                                Ваш заказ №13 успешно оформлен !
                            </p>
                        </div>

                    </div>
                </div>
            </div>


        );
    }


}

export default OrderSubmit;