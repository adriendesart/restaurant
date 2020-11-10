import React, { Component } from "react";
import PropTypes from 'prop-types';
import './events.scss';
import SectionTitle from "./sectiontitle";


export default class Events extends Component{
    render(){
        return(
            <section id="events">
                <SectionTitle 
                    title={'événements'}
                />
            </section>
        )
    }
}
Events.propTypes = {
    deviceType : PropTypes.string,
    deviceOrientation: PropTypes.string,
}