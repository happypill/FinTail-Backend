import express from 'express';
import userController from '../controller/user';

const router = express.Router();

/* GET index page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/',userController.getAllStocks);
router.get('/:_id', userController.getSpecificStocks);

export default router;
