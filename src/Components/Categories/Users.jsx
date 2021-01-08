import { Component } from "react";
import '../../Styles/Users.css';

class Users extends Component{

    render(){
        return (
            <>
            {this.props.visibility && 
                <div className="category-page users" >
                    <h2>Users</h2>
                    <div className="options">
                        <div className="filter">All Vendors</div>
                        <div className="filter">S1 Vendors</div>
                        <div className="filter">S2 Vendors</div>
                        <div className="filter">S3 Vendors</div>
                        <div className="filter">S4 Vendors</div>
                        <input />
                        <div className="view-type">A</div>
                        <div className="view-type">B</div>
                    </div>
                    <div className="user-cards" >
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            }
            </>
        );
    }
};

export default Users;