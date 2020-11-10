import React, { Component } from "react";
import PropTypes from 'prop-types';
import './menu.scss';
import SectionTitle from "./sectiontitle";


export default class Menu extends Component{
    render(){
        return(
            <section id="menu">
                <SectionTitle 
                    title={'La carte'}
                />
            </section>
        )
    }
}
Menu.propTypes = {
    deviceType : PropTypes.string,
    deviceOrientation: PropTypes.string,
}