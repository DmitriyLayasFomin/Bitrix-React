import React from "react";
import cancel from "../../../assets/img/cancel (2).svg";


class Bonus extends React.Component{


    render() {
        return (
            /*<!--------------------------------------------------бонусная программая------------------------------------------------->*/
            <div className="modal fade" id="myModal3">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/*<!-- Modal Header -->*/}
                        <div className="modal-header">
                            <h4 className="modal-title">Дополнительная информация
                                о бонусной программе</h4>
                            <button type="button" className="close" data-dismiss="modal"><img src={cancel} alt="/" className="close-img"/></button>
                        </div>
                        {/* <!-- Modal body -->*/}
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
                        {/* <!-- Modal footer -->*/}
                        <div className="modal-footer">

                        </div>

                    </div>
                </div>
            </div>

    );
    }


    }
    export default Bonus;