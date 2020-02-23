import React from 'react';
import {WrappedSliderProductsItem} from "../Containers/WrappedSliderProductItem";




class SliderProducts extends React.Component {

    constructor(props) {
        super(props);
        let arr = props.data;
        this.ProductItems = arr.map((el, index, array) =>

            <WrappedSliderProductsItem key={el.id}
                                  id={el.id}
                                  link={"/"}
                                  img={el.img}
                                  name={el.name}
                                  description={el.description}
                                  oldPrice={el.oldPrice}
                                  price={el.price}
                                  gram={el.gram}

            />
        );
    }






    render() {

        return (
            <div>
                <div className="container ">
                    <div className="row">
                        <h3>Вы недавно смотрели</h3>
                    </div>
                </div>
                <div className="container slider-product_container">
                    <div className="slider-product">
                        {this.ProductItems}
                    </div>
                </div>
            </div>

        );
    }


}


export default SliderProducts;