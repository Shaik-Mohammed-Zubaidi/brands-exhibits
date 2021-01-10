import { Component } from "react";
import './Inventory.css';
import Icons from "../Common/Icons";
import InventoryTable from "./InventoryTable";
import Stocks from "./Stocks";
import Graph from "./Graph";
import Filters from "../Common/Filters";

class Inventory extends Component{

    render(){
        return (
            <>
            {this.props.visibility && 
                <div className="category-page inventory">
                    <h2>Inventory</h2>
                    <div className="options" >
                        <Filters />
                        <div>
                            <Icons />
                        </div>
                    </div>
                    <Stocks />
                    <div className="stats" >
                        <Graph />
                        <InventoryTable />
                    </div>
                </div>
            }
            </>
        );
    }
};

export default Inventory;