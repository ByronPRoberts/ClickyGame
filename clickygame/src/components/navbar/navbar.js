import React, {Component} from "react";
import "./navbar.css";


class Navbar extends Component {
    render(){
        return (
            <nav className ="navbar">
                    <div className="brand">
                        <a href="/">Clicky Game</a>
                    </div>

            </nav>
        )
    }
}
// const Navbar = props => (
//     <nav className ="navbar">
//     <ul>
//         <li className="brand">
//         <a href="/">Clicky Game</a>
//         </li>
//         <li> Click an image to begin!</li>
//         <li>Score = {props.score} | Top Score = {props.topscore} </li>
//     </ul>
// </nav>
// );

export default Navbar;