import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import './admin.scss';
import NameInput from "../components/nameInput";
import CostInput from "../components/costInput";

const Admin = () =>{
    const [plats, setPlats] = useState([])

    useEffect(() => {
        const fetchData = async () =>{
            const data = await window.fetch("/api/plats")
            const json = await data.json()
            setPlats(json)
        }
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
            body : JSON.stringify({ category: category ,carte: carte})
        })
    }

    return(
        <div>
            <h2>Carte hebdomadaire</h2>
                <form>
                    <h3>Les entrées :</h3>
                        {plats.filter(x=>x.category === "entrée" && x.carte === "hebdomadaire").map(plat=>(
                            <div key={plat._id}>
                                <NameInput plat={plat} plats={plats} setPlats={setPlats} patchData={patchData}/>
                                <CostInput plat={plat} plats={plats} setPlats={setPlats} patchData={patchData}/>
                                <button onClick={(e)=>deleteData(plat, e)}>X</button>
                            </div>
                        ))}
                        <button onClick={(e)=>handleCreate({category : "entrée" ,carte : "hebdomadaire"},e)}>Ajouter un plat</button>
                    <h3>Les plats :</h3>
                        {plats.filter(x=>x.category === "plat" && x.carte === "hebdomadaire").map(plat=>(
                            <div key={plat._id}>
                                <NameInput plat={plat} plats={plats} setPlats={setPlats} patchData={patchData}/>
                                <CostInput plat={plat} plats={plats} setPlats={setPlats} patchData={patchData}/>
                                <button onClick={(e)=>deleteData(plat, e)}>X</button>
                            </div>
                        ))}
                        <button onClick={(e)=>handleCreate({category : "plat" ,carte : "hebdomadaire"},e)}>Ajouter un plat</button>
                    <h3>Les desserts :</h3>
                        {plats.filter(x=>x.category === "dessert" && x.carte === "hebdomadaire").map(plat=>(
                            <div key={plat._id}>
                                <NameInput plat={plat} plats={plats} setPlats={setPlats} patchData={patchData}/>
                                <CostInput plat={plat} plats={plats} setPlats={setPlats} patchData={patchData}/>
                                <button onClick={(e)=>deleteData(plat, e)}>X</button>
                            </div>
                        ))}
                        <button onClick={(e)=>handleCreate({category : "dessert" ,carte : "hebdomadaire"},e)}>Ajouter un plat</button>
                    <h3>Les suggestions :</h3>
                        {plats.filter(x=>x.category === "suggestion" && x.carte === "hebdomadaire").map(plat=>(
                            <div key={plat._id}>
                                <NameInput plat={plat} plats={plats} setPlats={setPlats} patchData={patchData}/>
                                <CostInput plat={plat} plats={plats} setPlats={setPlats} patchData={patchData}/>
                                <button onClick={(e)=>deleteData(plat, e)}>X</button>
                            </div>
                        ))}
                        <button onClick={(e)=>handleCreate({category : "suggestion" ,carte : "hebdomadaire"},e)}>Ajouter un plat</button>
                </form>
            <h2>Carte à emporter</h2>
            <h2>Menu hebdomadaire</h2>
            <h2>Menu de Noël</h2>
            <h2>Menu de Nouvel An</h2>
            <h2>Menu de Saint-Valentin</h2>
        </div>
    )
}

Admin.propTypes = {
    deviceType : PropTypes.string,
    deviceOrientation: PropTypes.string,
}

export default Admin