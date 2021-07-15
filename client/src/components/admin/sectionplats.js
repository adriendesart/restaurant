import React from "react";
import '../../pages/admin';
import NameInput from "./nameinput";
import CostInput from "./costinput";
import SubSectionTitle from "./../subsectiontitle";

const SectionPlats = ({sectionName, sectionCategory, sectionCarte, plats, setPlats, patchData, deleteData, handleCreate})=>{
    return(
        <section className="section-plats">
            <SubSectionTitle title={sectionName}/>
            {plats.filter(x=>x.category === sectionCategory && x.carte === sectionCarte).map(plat=>(
                <div key={plat._id} className="plat">
                    <NameInput plat={plat} plats={plats} setPlats={setPlats} patchData={patchData}/>
                    <CostInput plat={plat} plats={plats} setPlats={setPlats} patchData={patchData}/>
                    <button type="button" onClick={(e)=>deleteData(plat, e)}>X</button>
                </div>
            ))}
            <button className="btn-add-plat" type="button" onClick={(e)=>handleCreate({category : sectionCategory ,carte : sectionCarte},e)}>Ajouter un plat</button>
        </section>
    )
}

export default SectionPlats