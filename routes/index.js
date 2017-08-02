import express from 'express';
import userController from '../controller/user';
import request from 'request';
import User from '../models/User';

const router = express.Router();

/* GET index page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Express'
  });
});

/*POST USER PREFERENCE TO DASHBOARD*/
router.post('/dashboard', (req, res, next)=> {

});


export default router;
