import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import './admin.scss';
import CarteHebdomadaire from "../components/admin/cartehebdomadaire";
import CarteEmporter from "../components/admin/carteemporter";

const Admin = () =>{
    const [plats, setPlats] = useState([])

    const fetchData = async () =>{
        const data = await window.fetch("/api/plats")
        const json = await data.json()
        setPlats(json)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const patchData = async (plat) => {
        await window.fetch(`api/plats/${plat._id}`,{
            headers : {
                Accept : 'application/json',
                'Content-Type' : 'application/json'
            },
            method : 'PATCH',
            body : JSON.stringify(plat)
        })
    }

    const deleteData = async (plat) =>{
        setPlats(plats.filter(obj=>obj._id !== plat._id))
        await window.fetch(`api/plats/${plat._id}`,{
            method : 'DELETE'
        })
    }

    const handleCreate = async ({category,carte}) => {
        await window.fetch(`api/plats`,{
            headers : {
                Accept : 'application/json',
                'Content-Type' : 'application/json'
            },
            method : 'POST',
            body : JSON.stringify({ category: category ,carte: carte })
        })
        await fetchData()
    }

    return(
        <div id="admin-page">
            <CarteHebdomadaire plats={plats} setPlats={setPlats} patchData={patchData} deleteData={deleteData} handleCreate={handleCreate}/>
            <CarteEmporter plats={plats} setPlats={setPlats} patchData={patchData} deleteData={deleteData} handleCreate={handleCreate}/>
            {/* 'Menu hebdomadaire'
            'Menu de Noël'
            'Menu de Nouvel An'
            'Menu de Saint-Valentin' */}
        </div>
    )
}

Admin.propTypes = {
    deviceType : PropTypes.string,
    deviceOrientation: PropTypes.string,
}

export default Admin