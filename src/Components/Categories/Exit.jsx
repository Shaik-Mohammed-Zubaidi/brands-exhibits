import { Component } from "react";

class Exit extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <>
            {this.props.visibility && 
                <div className="category-page" >
                    Exit
                </div>
            }
            </>
        );
    }
};

export default Exit;