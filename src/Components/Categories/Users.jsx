import { Component } from "react";

class Users extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <>
            {this.props.visibility && 
                <div className="category-page" >
                    Users
                </div>
            }
            </>
        );
    }
};

export default Users;