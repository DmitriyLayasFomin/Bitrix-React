import React from 'react';
import axios from "axios";


class BreadCrumbs extends React.Component{

    constructor(props) {
        super(props);
        this.state = {breadcrumbs:''};
        this.link = '';
        let arr = props.crumbs;
        this.state.breadcrumbs = arr.map((el, index, array) =>{
            let classname = '';
            el.code !== '' ? this.link += el.code + '/' : this.link += '/';
            index === (array.length - 1) ? classname = 'breadcrumb-item active' : classname = 'breadcrumb-item ';
            return <li className={classname}><a href={this.link}>{el.name}</a></li>;
        });
    }



    render() {
        return (

            <div className="row">
                <ul className="breadcrumb">
                    {this.state.breadcrumbs}
                </ul>
            </div>

        );
    }


}

export default BreadCrumbs;