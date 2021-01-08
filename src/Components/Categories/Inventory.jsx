import { Component } from "react";
import '../../Styles/Inventory.css';

class Inventory extends Component{

    render(){
        return (
            <>
            {this.props.visibility && 
                <div className="category-page inventory" >
                    <h2>Inventory</h2>
                    <div className="options" >
                        <div>
                            <div>All</div>
                            <div>Select</div>
                        </div>
                        <div>
                            <div>A</div>
                            <div>B</div>
                        </div>
                    </div>
                    <div className="stocks" >
                        <div>Stock1</div>
                        <div>Stock2</div>
                        <div>Stock3</div>
                        <div>Stock4</div>
                    </div>
                    <div className="stats" >
                        <div>Chart</div>
                        <table>
                            <tr>
                                <th>Brand</th>
                                <th>Size</th>
                                <th>Quantity</th>
                                <th>Return Rate</th>
                            </tr>
                            <tr>
                                <td>A1</td>
                                <td>A2</td>
                                <td>A3</td>
                                <td>A4</td>
                            </tr>
                            <tr>
                                <td>B1</td>
                                <td>B2</td>
                                <td>B3</td>
                                <td>B4</td>
                            </tr>
                            <tr>
                                <td>C1</td>
                                <td>C2</td>
                                <td>C3</td>
                                <td>C4</td>
                            </tr>
                            <tr>
                                <td>D1</td>
                                <td>D2</td>
                                <td>D3</td>
                                <td>D4</td>
                            </tr>
                            <tr>
                                <td>E1</td>
                                <td>E2</td>
                                <td>E3</td>
                                <td>E4</td>
                            </tr>
                        </table>
                    </div>
                </div>
            }
            </>
        );
    }
};

export default Inventory;