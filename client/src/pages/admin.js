import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import './admin.scss';
import NameInput from "../components/nameinput";
import CostInput from "../components/costinput";
import SectionTitle from "../components/sectiontitle";
import SubSectionTitle from "../components/subsectiontitle";

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
            <SectionTitle title={'Carte hebdomadaire'}/>
                <form className="form">
                    <section className="section-plats">
                        <SubSectionTitle title={'Les entrées'}/>
                        {plats.filter(x=>x.category === "entrée" && x.carte === "hebdomadaire").map(plat=>(
                            <div key={plat._id} className="plat">
                                <NameInput plat={plat} plats={plats} setPlats={setPlats} patchData={patchData}/>
                                <CostInput plat={plat} plats={plats} setPlats={setPlats} patchData={patchData}/>
                                <button type="button" onClick={(e)=>deleteData(plat, e)}>X</button>
                            </div>
                        ))}
                        <button className="btn-add-plat" type="button" onClick={(e)=>handleCreate({category : "entrée" ,carte : "hebdomadaire"},e)}>Ajouter un plat</button>
                    </section>
                    <section className="section-plats">
                        <SubSectionTitle title={'Les plats'}/>
                        {plats.filter(x=>x.category === "plat" && x.carte === "hebdomadaire").map(plat=>(
                            <div key={plat._id} className="plat">
                                <NameInput plat={plat} plats={plats} setPlats={setPlats} patchData={patchData}/>
                                <CostInput plat={plat} plats={plats} setPlats={setPlats} patchData={patchData}/>
                                <button type="button" onClick={(e)=>deleteData(plat, e)}>X</button>
                            </div>
                        ))}
                        <button className="btn-add-plat" type="button" onClick={(e)=>handleCreate({category : "plat" ,carte : "hebdomadaire"},e)}>Ajouter un plat</button>
                    </section>
                    <section className="section-plats">
                        <SubSectionTitle title={'Les desserts'}/>
                        {plats.filter(x=>x.category === "dessert" && x.carte === "hebdomadaire").map(plat=>(
                            <div key={plat._id} className="plat">
                                <NameInput plat={plat} plats={plats} setPlats={setPlats} patchData={patchData}/>
                                <CostInput plat={plat} plats={plats} setPlats={setPlats} patchData={patchData}/>
                                <button type="button" onClick={(e)=>deleteData(plat, e)}>X</button>
                            </div>
                        ))}
                        <button className="btn-add-plat" type="button" onClick={(e)=>handleCreate({category : "dessert" ,carte : "hebdomadaire"},e)}>Ajouter un plat</button>
                    </section>
                    <section className="section-plats">
                        <SubSectionTitle title={'Les suggestions'}/>
                        {plats.filter(x=>x.category === "suggestion" && x.carte === "hebdomadaire").map(plat=>(
                            <div key={plat._id} className="plat">
                                <NameInput plat={plat} plats={plats} setPlats={setPlats} patchData={patchData}/>
                                <CostInput plat={plat} plats={plats} setPlats={setPlats} patchData={patchData}/>
                                <button type="button" onClick={(e)=>deleteData(plat, e)}>X</button>
                            </div>
                        ))}
                        <button className="btn-add-plat" type="button" onClick={(e)=>handleCreate({category : "suggestion" ,carte : "hebdomadaire"},e)}>Ajouter un plat</button>
                    </section>
                </form>
                <SectionTitle title={'Carte à emporter'}/>
                <form className="form">
                    <section className="section-plats">  
                        <SubSectionTitle title={'Les entrées'}/>
                        {plats.filter(x=>x.category === "entrée" && x.carte === "emporter").map(plat=>(
                            <div key={plat._id} className="plat">
                                <NameInput plat={plat} plats={plats} setPlats={setPlats} patchData={patchData}/>
                                <CostInput plat={plat} plats={plats} setPlats={setPlats} patchData={patchData}/>
                                <button type="button" onClick={(e)=>deleteData(plat, e)}>X</button>
                            </div>
                        ))}
                        <button className="btn-add-plat" type="button" onClick={(e)=>handleCreate({category : "entrée" ,carte : "emporter"},e)}>Ajouter un plat</button>
                    </section> 
                    <section className="section-plats">
                        <SubSectionTitle title={'Les plats'}/>
                        {plats.filter(x=>x.category === "plat" && x.carte === "emporter").map(plat=>(
                            <div key={plat._id} className="plat">
                                <NameInput plat={plat} plats={plats} setPlats={setPlats} patchData={patchData}/>
                                <CostInput plat={plat} plats={plats} setPlats={setPlats} patchData={patchData}/>
                                <button type="button" onClick={(e)=>deleteData(plat, e)}>X</button>
                            </div>
                        ))}
                        <button className="btn-add-plat" type="button" onClick={(e)=>handleCreate({category : "plat" ,carte : "emporter"},e)}>Ajouter un plat</button>
                    </section> 
                    <section className="section-plats">
                        <SubSectionTitle title={'Les desserts'}/>
                        {plats.filter(x=>x.category === "dessert" && x.carte === "emporter").map(plat=>(
                            <div key={plat._id} className="plat">
                                <NameInput plat={plat} plats={plats} setPlats={setPlats} patchData={patchData}/>
                                <CostInput plat={plat} plats={plats} setPlats={setPlats} patchData={patchData}/>
                                <button type="button" onClick={(e)=>deleteData(plat, e)}>X</button>
                            </div>
                        ))}
                        <button className="btn-add-plat" type="button" onClick={(e)=>handleCreate({category : "dessert" ,carte : "emporter"},e)}>Ajouter un plat</button>
                    </section> 
                    <section className="section-plats">
                        <SubSectionTitle title={'Les suggestions'}/>
                        {plats.filter(x=>x.category === "suggestion" && x.carte === "emporter").map(plat=>(
                            <div key={plat._id} className="plat">
                                <NameInput plat={plat} plats={plats} setPlats={setPlats} patchData={patchData}/>
                                <CostInput plat={plat} plats={plats} setPlats={setPlats} patchData={patchData}/>
                                <button type="button" onClick={(e)=>deleteData(plat, e)}>X</button>
                            </div>
                        ))}
                        <button className="btn-add-plat" type="button" onClick={(e)=>handleCreate({category : "suggestion" ,carte : "emporter"},e)}>Ajouter un plat</button>
                    </section>
                </form>
            <SectionTitle title={'Menu hebdomadaire'}/>
            <SectionTitle title={'Menu de Noël'}/>
            <SectionTitle title={'Menu de Nouvel An'}/>
            <SectionTitle title={'Menu de Saint-Valentin'}/>
        </div>
    )
}

Admin.propTypes = {
    deviceType : PropTypes.string,
    deviceOrientation: PropTypes.string,
}

export default Admin