import React from 'react';
import cancel from "../../../assets/img/cancel (2).svg";


class Recall extends React.Component{


    render() {
        return (




            /*-- ОБРАТНЫЙ ЗВОНОК--*/
            <div className="modal fade" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        { /*-- Modal Header --*/}
                        <div className="modal-header">
                            <h4 className="modal-title">Обратный звонок</h4>
                            <button type="button" className="close" data-dismiss="modal"><img src={cancel} alt="/" className="close-img"/></button>
                        </div>
                        {/*-- Modal body --*/}
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input type="text" placeholder="Как Вас зовут ?" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-lg-36 col-md-6">
                                    <div className="form-group">
                                        <input type="text" placeholder="Куда позвонить ?" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-modal-success_top btn-modal-success">Заказать</button>
                        </div>

                        {/*-- Modal footer --*/}
                        <div className="modal-footer">
                            <p className="modal-bottom-p">
                                Нажимая кнопку  “Заказать” , Вы  соглашаетесь
                                с условиями пользовательского соглашения
                            </p>
                        </div>

                    </div>
                </div>
            </div>


        );
    }


}

export default Recall;