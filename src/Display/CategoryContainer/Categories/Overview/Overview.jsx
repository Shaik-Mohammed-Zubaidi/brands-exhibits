import { Component } from "react";
import './Overview.css';
import Icons from "../GridIcons/Icons";
import OptionsFilters from "./OptionsFilters";
import Stocks from "./Stocks";
import TransactionTable from "./TransactionTable";
import TransactionsFilter from "./TransactionsFilter";

class Overview extends Component{

    render(){
        const {visibility} = this.props;
        return (
            <>
            {visibility && 
                <div className="category-page overview" >
                    <h2>Overview</h2>
                    <div className="options" >
                        <OptionsFilters />
                        <div>
                            <Icons />
                        </div>
                    </div>
                    <Stocks />
                    <div className="transactions" >
                        <TransactionsFilter />
                        <TransactionTable />
                    </div>
                </div>
            }
            </>
        );
    }
};

export default Overview;