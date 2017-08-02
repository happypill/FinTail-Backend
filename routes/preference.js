import express from 'express';
import userController from '../controller/user';
import request from 'request';
import User from '../models/User';

const router = express.Router();

/* GET index page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'PREFERENCE'
  });
});

/*POST USER PREFERENCE TO DASHBOARD*/
router.post('/stock/:id', (req, res, next)=> {
  let id = req.params.id
   res.json({'message': 'Preference Dashboard'});
});

router.get('/stock', (req, res, next)=> {
   res.json({'message': 'Preference Dashboard'});
})

router.get('/stock/:id', (req, res, next)=> {
   res.json({'message': 'Preference Dashboard'});
})




export default router;
