import React from 'react';
import {WrappedProductItem} from "../Containers/WrappedProductItem";
import Pagination from "./Pagination";



class Products extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            classContainer :'gif_on',
            ProductItems:'',
            Pagination:''
        };
        console.log('constructor');

    }
    componentWillMount() {
        this.setState({classContainer :'gif_on'});
        this.setItemsFromArr(this.props);
        console.log('componentWillMount 1');
    }
    componentDidMount() {
        console.log('componentDidMount 2');
        console.log(this.state);
        this.setState({classContainer :'container'});
        this.forceUpdate();

    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({classContainer :'gif_on',
            ProductItems:'',
            Pagination:''});
        console.log('componentWillReceiveProps 3');
        this.setItemsFromArr(nextProps);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.classContainer !== 'container') {
            this.setState({classContainer :'container'});
        }
        console.log('componentDidUpdate 6');

    }





    setItemsFromArr = (nextProps) =>{
        let arr = nextProps.data;
        if(arr.length > 0) {

            this.setState({ProductItems : arr.map((el, index, array) =>{

                   return <WrappedProductItem key={"slider" + el.id}
                                        id={el.id}
                                        link={"/"}
                                        img={el.img || "/assets/img/card-product_img1.png"}
                                        name={el.name}
                                        description={el.description}
                                        oldPrice={el.oldPrice}
                                        price={el.price}
                                        gram={el.gram}
                    />
            })}
            );
            this.setState({
                Pagination : <Pagination search={nextProps.search} maxPagesInRow={5} amount={nextProps.amount}
                                                    current={nextProps.page} link={nextProps.code}
                                                    count={nextProps.data.length}/>
            })

        }
    };


    render() {
        console.log('render');
        return (
            <div>

                <div className={this.state.classContainer}>
                    <div className="row">
                        <h3>{this.props.categoryName}</h3>
                    </div>
                </div>
                <div id="loaderImage" className="container container-catalog">
                    <div className="row">
                        {this.state.ProductItems}
                    </div>
                </div>
                {this.state.Pagination}
            </div>


        );
    }


}

export default Products;