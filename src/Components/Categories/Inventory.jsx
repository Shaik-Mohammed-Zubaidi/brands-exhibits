import { Component } from "react";

class Inventory extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <>
            {this.props.visibility && 
                <div className="category-page" >
                    Inventory
                </div>
            }
            </>
        );
    }
};

export default Inventory;