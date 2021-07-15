import React, { Component } from "react"
import PropTypes from 'prop-types';
import './navitem.scss'


export default class NavItem extends Component{
    render(){
        return(
            <li className={this.props.deviceType !== "Laptop"?"mobileNavItem":"navItem"}>
                <a className="navLink" href={this.props.anchor && "#" + this.props.anchor}>
                    {this.props.name}
                </a>
            </li>
        )
    }
}

NavItem.propTypes = {
    deviceType : PropTypes.string,
    deviceOrientation: PropTypes.string,
    name : PropTypes.string,
    anchor : PropTypes.string,
}