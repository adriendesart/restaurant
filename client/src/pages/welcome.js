import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types';
import './welcome.scss';
import Navbar from "./../components/welcome/navbar";
import SlideshowParallax from "./../components/welcome/slideshowparallax";
import Presentation from "./../components/welcome/presentation";
import Events from "./../components/welcome/events";
import Menu from "./../components/welcome/menu";
import Takeaway from "./../components/welcome/takeaway";


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