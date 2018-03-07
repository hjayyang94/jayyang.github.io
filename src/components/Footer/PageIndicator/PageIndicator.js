import React, { Component } from 'react';
import "./PageIndicator.css";

const NumberOfPages = (pages, indexOfCurrent) => {
    return pages.map((page, i) => (
        i === indexOfCurrent ?
            <span className="selectedDot" ></span> :
            <span className="dot" key={i} value={i}></span>));
}

class PageIndicator extends Component {


    render() {
        return (
            <div className="pageIndicator">
                {NumberOfPages(this.props.pages, this.props.selected)}
            </div>

        )
    }
}

export default PageIndicator;