import { Component } from "react";
import Icons from "../GridIcons/Icons";
import Cards from "./Cards";
import Filters from "./Filters";
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
                        <input />
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