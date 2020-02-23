import React from 'react';
import {store} from "../redux/configureStore"



class ProductsItem extends React.Component {

    constructor(props) {
        super(props);
        this.props.oldPrice === null ? this.oldPrice = "" : this.oldPrice =
            <p className="card-product_old">{this.props.oldPrice} руб.</p>;
        this.state = {
            count: this.props.count || 1
        };

    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        nextProps.count >1 ? this.setState({count: nextProps.count}) : void 0;
    }





    //--------------------------------------------- CARD
    removeAndChangeCount = (count) =>{
        this.removeFromCard();
        this.changeLocalCount(count);
    };
    changeLocalCount = (count = null) => {
        let newCount;
        count !== null ? newCount = this.state.count+count : newCount = this.state.count;
        newCount < 1 ? newCount = 1 : void 0;
        // this.props.inCard === true ? this.removeFromCard() : void 0;
        this.setState({count: newCount})
    };
    onAddToCart = () => {
        console.log(this.props.inCard);
        this.props.inCard === false ? this.putInCard() : this.removeFromCard();
    };

    putInCard = () => {
        this.props.addToCart(this.props.id, this.state.count,this.props.price);
    };
    removeFromCard = () => {
        this.props.removeFromCart(this.props.id);
    };
    //-------------------------------------------------------------------




    render() {
        return (

            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="card-product">
                    <a href={this.props.link} className="slider-product_div-a">
                    <div className="card-product_top">
                        <div className="card-product_top_text">
                            <p className="card-product_top_text_h">Состав:</p>
                            <p className="card-product_top_text_p">{this.props.description}</p>
                        </div>
                        <img src={this.props.img} alt="/" className="card-product_img"/>
                    </div>
                    </a>
                    <div className="card-product_content">
                        <h6>{this.props.name}</h6>
                        <p className="card-product_content_p">{this.props.gram} гр</p>
                        <p className="card-product_content_quantity">Количество :</p>
                        <div className="input-group_width">
                            <div className="input-group number-spinner">
                            <span className="input-group-btn">
					           <button onClick={() => {
                                   this.props.inCard === true ? this.removeAndChangeCount(-1) : this.changeLocalCount(-1);

                               }} className="btn btn-dark" data-dir="dwn">
                                    <img src="/assets/img/minus.png" alt="/" className="minus"/>
                               </button>
			            	</span>
                                <input value={this.state.count} onChange={()=>{void 0;}} type="text" className="form-control text-center"/>
                            <span className="input-group-btn">
					           <button onClick={() => {
                                   this.props.inCard === true ? this.removeAndChangeCount(1) : this.changeLocalCount(1);
                               }} className="btn btn-dark" data-dir="up">
                                   <img src="/assets/img/plus.png" alt="/" className="plus"/>
                               </button>
				            </span>
                            </div>
                        </div>
                        {this.oldPrice}
                        <p className="card-product_price">{this.props.price} <span>руб.</span></p>
                    </div>
                    <button onClick={() => {this.onAddToCart()}}
                            className="btn btn-success">{this.props.addToCartText}</button>
                </div>
            </div>
        );
    }


}


export default ProductsItem;