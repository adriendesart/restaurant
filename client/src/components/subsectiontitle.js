import React from "react";
import PropTypes from 'prop-types';
import './subsectiontitle.scss';


const SubSectionTitle = (props) => {
    return(
        <h3 className="subsectiontitle">{props.title.toLowerCase()}</h3>
    )
}
export default SubSectionTitle

SubSectionTitle.propTypes = {
    title : PropTypes.string
}