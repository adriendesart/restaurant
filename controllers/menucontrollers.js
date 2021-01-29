import PlatModel from '../schemas/plat.js'

export const addPlat = async (req,res)=> {
    const plat = new PlatModel(req.body)
    await plat.save()
    res.status(200).send(plat)
}

export const readPlat = async(req,res)=>{
    const plat = await PlatModel.find({_id : req.params.id})
    if (!plat) {
        res.status(404).send("Pas de plat trouvé")
    }
    res.status(200).send(plat)
}

export const updatePlat = async(req,res)=>{
    const plat = await PlatModel.findByIdAndUpdate(req.params.id, req.body)
    if (!plat) {
        res.status(404).send("Pas de plat trouvé")
    }
    await plat.save()
    res.status(200).send("Plat mis à jour")
}

export const deletePlat = async(req,res)=>{
    const plat = await PlatModel.findByIdAndDelete(req.params.id)
    if (!plat) {
        res.status(404).send("Pas de plat trouvé")
    }
    res.status(200).send("Plat supprimé")
}

export const readMenu = async(_,res)=>{
    const plats = await PlatModel.find({})
    if (!plats) {
        res.status(404).send("Pas de plat trouvé")
    }
    res.status(200).send(plats)
}

export const deleteMenu = async(_,res)=>{
    const plats = await PlatModel.deleteMany()
    res.send("Menu supprimé")
}