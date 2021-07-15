import React from "react";
import '../../pages/admin';
import SectionTitle from "./../sectiontitle";
import SectionPlats from "./sectionplats";

const CarteEmporter = ({plats, setPlats, patchData, deleteData, handleCreate})=>{
    return(
        <>
        <SectionTitle title={'Carte à emporter'}/>
        <form className="form">
            <SectionPlats sectionName={"Les entrées"} sectionCategory={"entrée"} sectionCarte={"emporter"} plats={plats} setPlats={setPlats} patchData={patchData} deleteData={deleteData} handleCreate={handleCreate}/>
            <SectionPlats sectionName={"Les plats"} sectionCategory={"plat"} sectionCarte={"emporter"} plats={plats} setPlats={setPlats} patchData={patchData} deleteData={deleteData} handleCreate={handleCreate}/>
            <SectionPlats sectionName={"Les desserts"} sectionCategory={"dessert"} sectionCarte={"emporter"} plats={plats} setPlats={setPlats} patchData={patchData} deleteData={deleteData} handleCreate={handleCreate}/>
            <SectionPlats sectionName={"Les suggestions"} sectionCategory={"suggestion"} sectionCarte={"emporter"} plats={plats} setPlats={setPlats} patchData={patchData} deleteData={deleteData} handleCreate={handleCreate}/>
        </form>
        </>
    )
}

export default CarteEmporter