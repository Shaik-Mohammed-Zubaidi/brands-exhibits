import { Component } from "react";

class Map extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <>
            {this.props.visibility && 
                <div className="category-page" >
                    Map
                </div>
            }
            </>
        );
    }
};

export default Map;