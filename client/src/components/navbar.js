import React, { Component } from "react"
import "./navbar.scss"
import PropTypes from 'prop-types';
import NavItem from "./navitem";

export default class Navbar extends Component{
    state ={
        clicked :false,
    }
    handleClick = () => {
        this.setState({
            clicked : !this.state.clicked
        })
    }
    render(){
        //Mobile & Tablet
        if(this.props.deviceType !== "Laptop"){
            return(
                <nav  className="navbar">
                    <ul className="mobileNavList">
                        <NavItem 
                            name={"Accueil"} 
                            deviceType={this.props.deviceType}
                            deviceOrientation={this.props.deviceOrientation}
                        />
                    </ul>
                </nav>
            )
        }
        //Laptop
        return (
            <nav  className="navbar">
                <ul className="navList">
                    <NavItem 
                        name={"Accueil"} 
                        deviceType={this.props.deviceType}
                        deviceOrientation={this.props.deviceOrientation}
                    />
                </ul>
            </nav>
        )
    }
}

Navbar.propTypes = {
    deviceType : PropTypes.string,
    deviceOrientation: PropTypes.string,
}