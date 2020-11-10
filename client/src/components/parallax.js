import React, { Component } from "react";
import PropTypes from 'prop-types';
import './parallax.scss';


export default class Parallax extends Component{

    render(){
        return(
            <div className="parallax fade" style={{backgroundImage: `url(${this.props.background})`, display : `${this.props.visible?"flex":"none"}`}}>
                {this.props.children}
            </div>
        )
    }
}


Parallax.propTypes = {
    background : PropTypes.string.isRequired,
    visible : PropTypes.bool.isRequired,
}