import React, { Component } from "react";
import PropTypes from 'prop-types';
import './admin.scss';

export default class Admin extends Component{
    render(){
        return(
            <div>
                Ici s'affiche l'admin
            </div>
        )
    }
}

Admin.propTypes = {
    deviceType : PropTypes.string,
    deviceOrientation: PropTypes.string,
}