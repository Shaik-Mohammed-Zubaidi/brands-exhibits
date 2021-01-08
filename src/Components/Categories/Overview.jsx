import { Component } from "react";

class Overview extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {visibility} = this.props;
        return (
            <>
            {visibility && 
                <div className="category-page" >
                    Overview
                </div>
            }
            </>
        );
    }
};

export default Overview;