import { Component } from "react";
import Icons from "../Common/Icons";
import DisplayMap from "./DisplayMap";
import './Map.css';

class Map extends Component{

    render(){
        return (
            <>
            {this.props.visibility && 
                <div className="category-page map" >
                    <div className="options" >    
                        <h2>Map View</h2>
                        <div>
                            <Icons />
                        </div>
                    </div>
                    <DisplayMap />
                </div>
            }
            </>
        );
    }
};

export default Map;