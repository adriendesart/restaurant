import React from 'react'

const CostInput = ({plat, plats, setPlats, patchData})=>{
    
    const handleChange = (e) => {
        setPlats(plats.map(obj=>obj._id === plat._id?{...obj,cost : e.target.value}:obj))
        patchData({...plat, cost : e.target.value})
    }

    return(
        <label htmlFor="number" className="inputBox">Prix:
		    <input onChange={handleChange}
            placeholder="num" 
            value={plat.cost} 
            type="number" 
            min="0"/>
	    </label>
    )
}

export default CostInput