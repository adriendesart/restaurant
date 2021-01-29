import express from 'express';
import {addPlat, deleteMenu, deletePlat, readMenu, readPlat, updatePlat} from '../controllers/menucontrollers.js';
import {catchErrors} from '../utils/HOF.js';

const router = express.Router()

router.post('/addPlat', catchErrors(addPlat))

router.get('/readMenu', catchErrors(readMenu))

router.get('/readPlat/:id', catchErrors(readPlat))

router.patch('/updatePlat/:id', catchErrors(updatePlat))

router.delete('/deletePlat/:id', catchErrors(deletePlat))

router.delete('/deleteMenu', catchErrors(deleteMenu))

export default router;