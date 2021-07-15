import React, { Component } from "react";
import PropTypes from 'prop-types';
import './slideshowparallax.scss';
import Parallax from "./parallax";
import ParallaxImage1 from "./../../img/parallax1.jpg";
import ParallaxImage2 from "./../../img/parallax2.jpg";
import ParallaxImage3 from "./../../img/parallax3.jpg";
import ParallaxImage4 from "./../../img/parallax4.jpg";
import ArrowDown from './../../img/arrow-down.svg';

export default class SlideshowParallax extends Component {
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
        let scrollArrow = (
            <button disabled className="arrow-button">
                Scroll down
                <img src={ArrowDown} alt="scroll-down" className="arrow-wobble-vertical"/>
            </button>
        )
        return(
            <section id="slideshow-container">
                <Parallax background={ParallaxImage1} visible={this.state.actualBackground === 0}>
                    {scrollArrow}
                </Parallax>
                <Parallax background={ParallaxImage2} visible={this.state.actualBackground === 1}>
                    {scrollArrow}
                </Parallax>
                <Parallax background={ParallaxImage3} visible={this.state.actualBackground === 2}>
                    {scrollArrow}
                </Parallax>
                <Parallax background={ParallaxImage4} visible={this.state.actualBackground === 3}>
                    {scrollArrow}
                </Parallax>
            </section>
        )
    }
}
SlideshowParallax.propTypes = {
    deviceType : PropTypes.string,
    deviceOrientation: PropTypes.string,
}