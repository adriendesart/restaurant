import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types';
import './welcome.scss';
import Navbar from "../sections/navbar";
import SlideshowParallax from "../sections/slideshowparallax";
import Presentation from "../sections/presentation";
import Events from "../sections/events";
import Menu from "../sections/menu";
import Takeaway from "../sections/takeaway";


export default class WelcomePage extends Component{
    state = {
        visible : false,
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll)
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll)
    }
    handleScroll=()=>{
        if(window.scrollY>50){
            this.setState({
                visible: true,
            })
        } else {
            this.setState({
                visible: false,
            })
        }
        
    }
    render(){
        return(
            <Fragment>
                <Navbar 
                    visible={this.state.visible}
                    deviceType={this.props.deviceType}
                    deviceOrientation={this.props.deviceOrientation}
                />
                <SlideshowParallax
                    deviceType={this.props.deviceType}
                    deviceOrientation={this.props.deviceOrientation}
                />
                <Presentation
                    deviceType={this.props.deviceType}
                    deviceOrientation={this.props.deviceOrientation}
                />
                <Events
                    deviceType={this.props.deviceType}
                    deviceOrientation={this.props.deviceOrientation}
                />
                <Menu
                    deviceType={this.props.deviceType}
                    deviceOrientation={this.props.deviceOrientation}
                />
                <Takeaway
                    deviceType={this.props.deviceType}
                    deviceOrientation={this.props.deviceOrientation}
                />
            </Fragment>
        )
    }
}

WelcomePage.propTypes = {
    deviceType : PropTypes.string,
    deviceOrientation: PropTypes.string,
}