import { Component } from "react";
import MapImage from './map-photo.PNG';
import './Map.css';

class Map extends Component{

    render(){
        return (
            <>
            {this.props.visibility && 
                <div className="category-page map" >
                    <h3>Map</h3>
                    <div className="options" >    
                        <h2>Map View</h2>
                        <div>
                            <div>A</div>
                            <div>B</div>
                        </div>
                    </div>
                    <img src={MapImage} alt="Map pic" className="map-image" />
                </div>
            }
            </>
        );
    }
};

export default Map;