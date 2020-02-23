import React from 'react';
import MenuItem from "./MenuItem.js";




class Menu extends React.Component{

    constructor(props){
        super(props);
        let arr = props.data;
        this.state = {menuItems:[]};
        this.state.menuItems = arr.map((el, index,array)=>

            <MenuItem key={"menuitem"+index.toString()}
                      link={"/"}
                      img={el.img}
                      name={el.name}
            />
        );
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setItems(nextProps.data);
    }
    setItems = (arr) =>{
        this.setState({menuItems:arr.map((el, index,array)=>

                <MenuItem key={"menuitem"+index.toString()}
                          code={el.code}
                          img={el.img}
                          name={el.name}
                />
            )});
    };

    render() {
        return (

            <div className="container menu-die">
                <div className="row">
                    {this.state.menuItems}
                    <div className="col-lg-3 col-sm-4 col-6 col-padding">
                        <a href={"/catalog"}>
                            <div className="menu-die-position">
                                <p className="menu-die-position_p">Меню</p>
                                <div className="menu-die-position_shadow"></div>
                                <div className="menu-die-position-img menu-die-position-img8"></div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

        );
    }


}

export default Menu;