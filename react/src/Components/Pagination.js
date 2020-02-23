import React from 'react';


class Pagination extends React.Component {

    constructor(props) {
        super(props);
        this.Init(this.props);


    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.Init(nextProps);
    }

    Init = (props) => {
        let amount;
        this.link = window.location.origin + window.location.pathname+"?page=";
        props.amount < props.count ? amount = props.count : amount = props.amount;
        this.prev = null;
        this.next = null;
        this.amountArray = [];
        this.li = null;
        props.search !== '' || props.search !== null ? this.search = '&search='+props.search : this.search = '';
        if(amount>this.props.count) {
            this.amountToArray(amount / this.props.count);
            Number(props.current) > 1 ? this.prev = Number(props.current - 1) : this.prev = 1;
            Number(props.current) < this.amountArray[this.amountArray.length - 1] ? this.next = Number(props.current) + 1 : this.next = props.current;
            let class_name;
            //первый и последний элемент пагинации
            this.firstEl = 1;
            this.lastEl = 5;
            this.setLastEndPag(props.current, this.amountArray);
            //////////////////////////////////////
            let temp = this.amountArray.slice(Number(this.firstEl) - 1, this.lastEl);
            this.amountArray = temp;
            this.li = this.amountArray.map((el, i, array) => {

                Number(el) + 1 === Number(props.current) ? class_name = "page-item active" : class_name = "page-item";
                return <li key={el} className={class_name}><a className="page-link"
                                                              href={this.link + (el + 1)+this.search}>{el + 1}</a>
                </li>;
            });
        }else{
            this.li = <li className={"page-item active"}><a className="page-link" href={this.link + '1'+this.search}>{1}</a></li>;
        }
    };
    getMaxEl = (current) =>{
        let i = Number(current);
        if(i % 5 !== 0)
        {
            while (i % 5 !== 0)
            {

                i++;
            }
        }

        return i;
    };
    getMinEl = (current) =>{
        let i =Number(current);
        if(i % 5 !== 0)
        {
            while (i % 5 !== 0)
            {

                i--;
            }
        }else{
            i= i-5;
        }
        return i+1;
    };
    setLastEndPag = (current, arr) => {
        let max = this.getMaxEl(current);
        let min = this.getMinEl(current);
        arr.indexOf(max) !== -1 ? this.lastEl = max : this.lastEl = arr[arr.length - 1];
        this.firstEl = min;

    };
    amountToArray = (amount) => {
        let _amount = Math.ceil(amount);
        for (let i = 0; i < _amount; i++) {
            this.amountArray[i] = i;
        }
    };

    render() {
        return (
            <div className="container">
                <ul className="pagination justify-content-center">
                    <li className="page-item page-item-arrow"><a className="page-link"
                                                                 href={this.link + this.prev+this.search}>
                        <img src="/assets/img/backward-arrow1.png" alt="/" className=""/>
                    </a></li>
                    {this.li}
                    <li className="page-item page-item-arrow"><a className="page-link"
                                                                 href={this.link + this.next+this.search}>
                        <img src="/assets/img/backward-arrow2.png" alt="/" className=""/>
                    </a></li>
                </ul>
            </div>
        );
    }


}

export default Pagination;