import React from 'react';
import cutlery from "../../../assets/img/cutlery3.png";

class OrderError extends React.Component{


    render() {
        return (
           /* <!-------------------------------------------------------сбой------------------------------------------->*/
        <div className="modal fade" id="myModal9">
            <div className="modal-dialog">
                <div className="modal-content">
                    {/* <!-- Modal Header -->*/}
                    <div className="modal-header">
                        <h4 className="modal-title"></h4>
                    </div>
                    {/*<!-- Modal body -->*/}
                    <div className="modal-body modal-body-center w-100">
                        <img src={cutlery} alt="/" className="tray"/>
                    </div>
                   {/* <!-- Modal footer -->*/}
                    <div className="modal-footer">
                        <p className="modal-bottom-p modal-bottom">
                            Что-то пошло не так....<br/>
                            Попробуйте снова
                        </p>
                    </div>

                </div>
            </div>
        </div>
        );
    }


}

export default OrderError;