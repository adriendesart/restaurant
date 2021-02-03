import React, { Component } from "react";
import PropTypes from 'prop-types';
import './takeaway.scss';
import SectionTitle from "../components/sectiontitle";


export default class Takeaway extends Component{
    render(){
        return(
            <section id="takeaway">
                <SectionTitle 
                    title={'à emporter'}
                />
            </section>
        )
    }
}
Takeaway.propTypes = {
    deviceType : PropTypes.string,
    deviceOrientation: PropTypes.string,
}