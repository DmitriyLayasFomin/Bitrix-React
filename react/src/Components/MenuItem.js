import React from 'react';



class MenuItem extends React.Component{

    constructor(props){
        super(props);
        this.code = props.code;
        this.img = props.img;
        this.name = props.name;
    }

    render() {
        return (
            <div className="col-lg-3 col-sm-4 col-6 col-padding">
                <a href={"/catalog/"+this.code}>
                    <div className="menu-die-position">
                        <p className="menu-die-position_p">{this.name}</p>

                        <div className="menu-die-position_shadow"/>
                        <div style={{backgroundImage: `url(${this.img})`}} className="menu-die-position-img "/>
                    </div>
                </a>
            </div>
        );
    }


}

export default MenuItem;