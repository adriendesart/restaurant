import React, { Component, Fragment } from "react"
import "./navbar.scss"
import PropTypes from 'prop-types';
import NavItem from "./navitem";
import Brand from "../img/brand_logo.png"
import NavBurger from '../img/bars.svg'


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
        let items = (
            <Fragment>
                <NavItem 
                    name={"Accueil"} 
                    deviceType={this.props.deviceType}
                    deviceOrientation={this.props.deviceOrientation}
                    />
                <NavItem 
                    name={"Événements"}
                    deviceType={this.props.deviceType}
                    deviceOrientation={this.props.deviceOrientation}
                    />
                <NavItem 
                    name={"À emporter"} 
                    deviceType={this.props.deviceType}
                    deviceOrientation={this.props.deviceOrientation}
                    />
                <NavItem 
                    name={"La carte"}
                    deviceType={this.props.deviceType}
                    deviceOrientation={this.props.deviceOrientation}
                />
                <NavItem 
                    name={"Galerie"}
                    deviceType={this.props.deviceType}
                    deviceOrientation={this.props.deviceOrientation}
                />
                <NavItem 
                    name={"Contact"}
                    deviceType={this.props.deviceType}
                    deviceOrientation={this.props.deviceOrientation}
                />
                <NavItem 
                    name={"Réservation"}
                    deviceType={this.props.deviceType}
                    deviceOrientation={this.props.deviceOrientation}
                />
            </Fragment>
        )
        if(this.props.deviceType !== "Laptop"){
            return(
                    <nav  className="navbar" style={{top : "0"}}>
                        <a href="#">
                            <img src={Brand} alt="La ligne rouge" />  
                        </a> 
                        <button className="navBurger" onClick={this.handleClick}>
                            <img src={NavBurger} alt="navigation list"/>
                        </button>
                        <ul className="mobileNavList" style={{transform: this.state.clicked && "scaleY(1)"}}>
                            {items}
                        </ul>
                    </nav>
            )
        }
        
        return(
            <nav  className="navbar" style={{top : this.props.visible && "0"}}>
                <a href="#">
                    <img src={Brand} alt="La ligne rouge" />  
                </a> 
                <ul className="navList">
                    {items}
                </ul>
            </nav>
        )
    }
}

Navbar.propTypes = {
    deviceType : PropTypes.string,
    deviceOrientation: PropTypes.string,
    visible : PropTypes.bool,
}