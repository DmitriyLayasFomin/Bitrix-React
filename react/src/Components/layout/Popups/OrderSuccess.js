import React from 'react';
import cutlery from "../../../assets/img/cutlery2.png";


class OrderSuccess extends React.Component {


    render() {
        return (

            /*<!--------------------------------------------------------удалось сделать заказ!------------------------------------------->*/
            <div className="modal fade" id="myModal8">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/*<!-- Modal Header -->*/}
                        <div className="modal-header">
                            <h4 className="modal-title"></h4>
                        </div>
                        {/*<!-- Modal body -->*/}
                        <div className="modal-body modal-body-center w-100">
                            <img src={cutlery} alt="/" className="tray"/>
                        </div>
                        {/*<!-- Modal footer -->*/}
                        <div className="modal-footer">
                            <p className="modal-bottom-p modal-bottom">
                                Поздравляем ! Вам удалось сделать заказ!
                                Путь в тысячу миль наченаеться с одного шага !
                            </p>
                        </div>

                    </div>
                </div>
            </div>

        );
    }


}

export default OrderSuccess;