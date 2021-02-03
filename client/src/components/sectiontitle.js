import React from "react";
import PropTypes from 'prop-types';
import './sectiontitle.scss';


const SectionTitle = (props) => {
    return(
        <h2 className="sectiontitle">{props.title.toLowerCase()}</h2>
    )
}
export default SectionTitle

SectionTitle.propTypes = {
    title : PropTypes.string
}