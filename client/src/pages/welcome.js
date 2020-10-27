import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types';
import './welcome.scss';

export default class WelcomePage extends Component{
    state = {}
    
    render(){
        return(
            <Fragment>
                <div>
                    Ici s'affiche l'acceuil
                </div>
            </Fragment>
        )
    }
}

WelcomePage.propTypes = {
    deviceType : PropTypes.string,
    deviceOrientation: PropTypes.string,
}