import { Component } from "react";
import Icons from "../Common/Icons";
import Cards from "./Cards";
import Filters from "./Filters";
import SearchBox from "./SearchBox";
import './Users.css';

class Users extends Component{

    render(){
        return (
            <>
            {this.props.visibility && 
                <div className="category-page users" >
                    <h2>Users</h2>
                    <div className="options">
                        <Filters />
                        <SearchBox />
                        <Icons />
                    </div>
                    <Cards />
                </div>
            }
            </>
        );
    }
};

export default Users;