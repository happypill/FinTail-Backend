import express from 'express';
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
   let id = req.params.id;
   console.log(id);
   User.findById({_id: id}, (err, user) => {
    if (err) return res.json({message: 'could not find user because: ' + err})
    const name = req.body.result;
    let preference = {
      name: name
    }
    user.preference.push(preference);
    user.save();
    // res.render('settings', {
    //   acctBalance: user.acctBalance
    // });
  });
});
export default router;
