import express from 'express';
import userController from '../controller/userController';

const router = express.Router();

router.get('/',userController.getAllStocks);
router.get('/:_id', userController.getSpecificStocks);




export default router;
