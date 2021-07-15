import React from "react";
import '../../pages/admin';
import SectionTitle from "./../sectiontitle";
import SectionPlats from "./sectionplats";

const CarteHebdomadaire = ({plats, setPlats, patchData, deleteData, handleCreate})=>{
    return(
        <>
        <SectionTitle title={'Carte hebdomadaire'}/>
        <form className="form">
            <SectionPlats sectionName={"Les entrées"} sectionCategory={"entrée"} sectionCarte={"hebdomadaire"} plats={plats} setPlats={setPlats} patchData={patchData} deleteData={deleteData} handleCreate={handleCreate}/>
            <SectionPlats sectionName={"Les plats"} sectionCategory={"plat"} sectionCarte={"hebdomadaire"} plats={plats} setPlats={setPlats} patchData={patchData} deleteData={deleteData} handleCreate={handleCreate}/>
            <SectionPlats sectionName={"Les desserts"} sectionCategory={"dessert"} sectionCarte={"hebdomadaire"} plats={plats} setPlats={setPlats} patchData={patchData} deleteData={deleteData} handleCreate={handleCreate}/>
            <SectionPlats sectionName={"Les suggestions"} sectionCategory={"suggestion"} sectionCarte={"hebdomadaire"} plats={plats} setPlats={setPlats} patchData={patchData} deleteData={deleteData} handleCreate={handleCreate}/>
        </form>
        </>
    )
}

export default CarteHebdomadaire