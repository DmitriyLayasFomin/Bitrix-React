import React from 'react';
export default class BannerItem extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            img: props.img,
            name: props.name,
            description: props.description,
            gram: props.gram,
            oldPrice: props.oldPrice,
            newPrice: props.newPrice,
            iterator:props.iterator,
            link:props.link
        }
    }

    render() {
        return (
                    <div className={this.state.iterator === 0 ? "carousel-item active": "carousel-item"}>
                        <div className="row">
                            <div className="col-lg-7 col-md-7 p-0">

                                <div style={{ backgroundImage: `url(${this.state.img})` }} className="carousel-inner_img "></div>
                            </div>
                            <div className="col-lg-5 col-md-5 p-0">
                                <div className="carousel-inner_text ">
                                    <div className="carousel-inner_text-width">
                                        <h1>{this.state.name}</h1>
                                        <p className="carousel-inner_text-weight">{this.state.gram} грамм</p>
                                        <p className="carousel-inner_text-p">{this.state.description}</p>
                                        <p className="carousel-inner_text-old">{this.state.oldPrice} руб</p>
                                        <p className="carousel-inner_text-price">{this.state.newPrice} руб.</p>
                                        <a href={this.state.link}><button className="btn btn-warning">Подробнее</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

        );
    }
}