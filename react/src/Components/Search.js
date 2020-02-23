import React from 'react';


class Search extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {value: ''};
    }

    changeSearch = (text)=>{
        this.props.changeSearch(text);
    };
    render() {
        return (

            <div className="row">
                <div className="input-group input-group-top mt-1">
                    <input onChange={(e)=>{this.setState({value: e.target.value})}} value={this.state.value} type="text" className="form-control form-control-color"
                           placeholder="Что то потеряли ?!"/>
                        <div className="input-group-append">
                            <button onClick={()=>{this.changeSearch(this.state.value)}} className="btn btn-succes" type="submit">Поиск</button>
                        </div>
                </div>
            </div>

        );
    }


}

export default Search;