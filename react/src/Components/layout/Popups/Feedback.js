import React from "react";
import cancel from "../../../assets/img/cancel (2).svg";


class Feedback extends React.Component{


    render() {
        return (
            /*<!-----------------------------------------------Отзывы полиция качества-------------------------------------------->*/
            <div className="modal fade" id="myModa7">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        {/*<!-- Modal Header -->*/}
                        <div className="modal-header">
                            <h4 className="modal-title">Отзывы полиция качества</h4>
                            <button type="button" className="close" data-dismiss="modal"><img src={cancel} alt="/" className="close-img"/></button>
                        </div>
                        {/*<!-- Modal body -->*/}
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-lg-4 ">
                                    <div className="form-group">
                                        <label>Имя</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label>Телефон</label>
                                        <input type="text" className="form-control" placeholder="+7(000)-00-00" />
                                    </div>
                                </div>
                                <div className="col-lg-4 ">
                                    <div className="form-group">
                                        <label>E-mail</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-lg-12 ">
                                    <div className="form-group">
                                        <label htmlFor="comment">Сообщение</label>
                                        <textarea className="form-control" rows="3" id="comment"></textarea>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-modal-success_top btn-modal-success">Заказать</button>
                        </div>

                        {/*<!-- Modal footer -->*/}
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
export default Feedback;