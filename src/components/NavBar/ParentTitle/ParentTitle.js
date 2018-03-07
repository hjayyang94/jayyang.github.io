import React from 'react';
import "./ParentTitle.css";


const parentTitle = (props) => {
    return (
        <button className="Button" onClick={props.click}>
            <div className="Arrow" />
            <div className="ParentTitle">{props.parentTitle}</div>
        </button>
    )
}

export default parentTitle;