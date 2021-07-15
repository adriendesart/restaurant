import React from 'react';
import './nameinput.scss';

const NameInput = ({plat, plats, setPlats, patchData})=>{

    const handleChange = (e) => {
        setPlats(plats.map(obj=>obj._id === plat._id?{...obj,name : e.target.value}:obj))
        patchData({...plat, name : e.target.value})
    }

    return(
        <label htmlFor="text" className="inputNameBox">Nom :
            <input onChange={handleChange} 
            placeholder="text" 
            value={plat.name}
            className="inputName" 
            type="text"
            />
        </label>
    )
}

export default NameInput