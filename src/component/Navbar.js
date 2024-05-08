import { Component } from "react";

export default class Navbar extends Component{
    render() {
        return (
            <div className="navbar">
                <p>{this.props.name}</p>
            </div>
        )
    }
}