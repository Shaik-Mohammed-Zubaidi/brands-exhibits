import { Component } from "react";

class Transport extends Component{

    render(){
        return (
            <>
            {this.props.visibility && 
                <div className="category-page" >
                    Transport
                </div>
            }
            </>
        );
    }
};

export default Transport;