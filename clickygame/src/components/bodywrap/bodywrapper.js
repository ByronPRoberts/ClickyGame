import React from "react";
import "./bodywrapper.css";

const Bodywrapper = props => (
    <div className = "wrapper">{props.children}</div>
);

export default Bodywrapper;