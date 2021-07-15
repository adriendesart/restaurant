import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import './menu.scss';
import SectionTitle from "./../sectiontitle";

const Menu = () => {
    const [plats, setPlats] = useState([])

    useEffect( () => {
        const fetchData = async ()=>{
            const data = await window.fetch("/api/plats")
            const json = await data.json()
            console.log(json)
            setPlats(json)
        }
        fetchData()
    }, [])

    return(
        <section id="menu">
            <SectionTitle 
                title={'La carte'}
            />
            {plats.map(plat=>(<p key={plat._id}>{plat.name +". "+ plat.cost+ "€"}</p>))}
        </section>
    )
}
Menu.propTypes = {
    deviceType : PropTypes.string,
    deviceOrientation: PropTypes.string,
}


export default Menu