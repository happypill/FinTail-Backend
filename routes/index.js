import express from 'express';
import userController from '../controller/user';
import request from 'request';

const router = express.Router();

// const asyncPull = (query)=>{
//   request
//   .get(query)
//   .on('response', function(response) {
//     console.log(response.statusCode) // 200
//     console.log(response.headers['content-type'])
//   })
// }

// const getDailyChart = (tickrs) =>{
//   const query = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol='${tickrs}'&interval=1min&apikey=GQBU0ZPN342PFXI9'
//   return asyncPull(query);
// }

//https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol='+searchTerm+'&interval=1min&apikey=GQBU0ZPN342PFXI9


/* GET index page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Express'
  });
});
// router.get('/stock/:tickr', (req, res) => {
//   const { symbol } = req.params
//     request
//     .get()
//     .on('response', function(response) {
//        const metadata = data['Time Series (Daily)']
//     })
//   })




router.get('/',userController.getAllStocks);
router.get('/:_id', userController.getSpecificStocks);

export default router;
