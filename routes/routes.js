import express from 'express';
import {addPlat, deleteMenu, deletePlat, readMenu, readPlat, updatePlat} from '../controllers/menucontrollers.js';
import {catchErrors} from '../utils/HOF.js';

const router = express.Router()

router.post('/api/plats', catchErrors(addPlat))

router.get('/api/plats/:id', catchErrors(readPlat))

router.patch('/api/plats/:id', catchErrors(updatePlat))

router.delete('/api/plats/:id', catchErrors(deletePlat))

router.get('/api/plats', catchErrors(readMenu))

router.delete('/api/plats', catchErrors(deleteMenu))

router.get('/*', (_,res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

export default router;