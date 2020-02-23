import React from 'react';
import BannerItem from "./BnnerItem";

export default class Banner extends React.Component{

    constructor(props){
        super(props);
        let arr = props.data;
        this.li = arr.map((el, index,array) =>
            <li key={"bannerli" + index.toString()} data-target="#carouselExampleIndicators" data-slide-to={index} className={index.toString() === "0" ? "active" : ""} />
        );
        this.bannerItems = arr.map((el, index,array) =>
           <BannerItem iterator={index}
                       key={"banneritem"+index.toString()}
                       img={el.img} name={el.name}
                       description={el.description}
                       gram={el.gram}
                       newPrice={el.newPrice}
                       oldPrice={el.oldPrice}
                       link={"/"}
           />
        );
    }

    render() {
        return (
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    {this.li}
                </ol>
                <div className="carousel-inner">
                    {this.bannerItems}
                </div>
            </div>
        );
    }
}