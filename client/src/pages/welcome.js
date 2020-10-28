import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types';
import './welcome.scss';
import Parallax from "../components/parallax";
import ParallaxImage1 from "../img/parallax1.jpg";
import ParallaxImage2 from "../img/parallax2.jpg";
import ParallaxImage3 from "../img/parallax3.jpg";
import ParallaxImage4 from "../img/parallax4.jpg";
import Navbar from "../components/navbar";

export default class WelcomePage extends Component{
    state ={
        actualBackground : 0,
    }
    backgroundTimer = () =>{
        if(this.state.actualBackground < 4 - 1){
            this.setState({
                actualBackground : (this.state.actualBackground + 1)
            })
        } else {
            this.setState({
                actualBackground : 0
            })
        }
    }
    componentDidMount() {
        this.timerID = setInterval(
          () => this.backgroundTimer(),
          10000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    render(){
        return(
            <Fragment>
                <div class="slideshow-container">
                    <Parallax background={ParallaxImage1} visible={this.state.actualBackground === 0}>
                        <div>News</div>
                    </Parallax>
                    <Parallax background={ParallaxImage2} visible={this.state.actualBackground === 1}>
                        <div>Test</div>
                    </Parallax>
                    <Parallax background={ParallaxImage3} visible={this.state.actualBackground === 2}>
                        <div>Blabla</div>
                    </Parallax>
                    <Parallax background={ParallaxImage4} visible={this.state.actualBackground === 3}>
                        <div>Baaa</div>
                    </Parallax>
                </div>
                <Navbar
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