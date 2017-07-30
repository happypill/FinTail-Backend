import User from '../models/User';

//RETURN JSON

exports.getAllStocks = (req,res) => {
  //.populate Stock Name
  User.find({}).populate('stockname').exec( (err,stock) => {
    console.log(stock)
    res.json(stock);
  })
}

exports.postStock = (req,res) => {
  const newUserStock = new User({
    preference:{
      stockname:req.body.stockname,
      entryPrice: req.body.entryPrice
    }
  });

  newUserStock.save((err) => {
    if(err){console.log(err); return;}
    res.json(newUserStock);
  })
}
