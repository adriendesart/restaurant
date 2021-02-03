import React, { Component } from "react";
import PropTypes from 'prop-types';
import './presentation.scss';
import SectionTitle from "../components/sectiontitle";


export default class Presentation extends Component{
    render(){
        return(
            <section id="presentation">
                <SectionTitle 
                    title={'Le restaurant'}
                />
                <p>Dans un décor sobre et élégant, Catherine et Olivier Lust vous accueillent à La Ligne Rouge.</p>
                <p>La cuisine gastronomique française est mise à l’honneur grâce au talent de son chef Benjamin Laborie.</p>
                <p>Sa cuisine basée sur les produits de la saison vous comblera tout au long de l’année.</p>
                <p>Dès les beaux jours vous pourrez apprécier votre déjeuner en terrasse, dans un magnifique écrin de verdure.</p>
                <div>
                    
                </div>
            </section>
        )
    }
}
Presentation.propTypes = {
    deviceType : PropTypes.string,
    deviceOrientation: PropTypes.string,
}