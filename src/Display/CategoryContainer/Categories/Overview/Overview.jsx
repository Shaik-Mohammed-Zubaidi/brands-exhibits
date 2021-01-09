import { Component } from "react";
import './Overview.css';

class Overview extends Component{

    render(){
        const {visibility} = this.props;
        return (
            <>
            {visibility && 
                <div className="category-page overview" >
                    <h3>Overview</h3>
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
                    <div className="transactions" >
                        <div>
                            <h2>Recent Transactions</h2>
                            <div>View All</div>
                        </div>
                        <table>
                            <tr>
                                <th>Name</th>
                                <th>Location</th>
                                <th>Brand</th>
                                <th>Quantity</th>
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
                        </table>
                    </div>
                </div>
            }
            </>
        );
    }
};

export default Overview;