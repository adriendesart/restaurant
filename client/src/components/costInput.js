import React from 'react';
import './costinput.scss';

const CostInput = ({plat, plats, setPlats, patchData})=>{
    
    const handleChange = (e) => {
        setPlats(plats.map(obj=>obj._id === plat._id?{...obj,cost : e.target.value}:obj))
        patchData({...plat, cost : e.target.value})
    }

    return(
        <label htmlFor="number" className="inputCostBox">Prix:
		    <input onChange={handleChange}
            placeholder="num" 
            value={plat.cost} 
            type="number" 
            className="inputCost"
            min="0"
            tabIndex="-1"
            />
            €
	    </label>
    )
}

export default CostInput