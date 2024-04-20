var express = require('express');
var router = express.Router();
var pool=require('./pool')
/* GET home page. */
router.get('/registration', function(req, res, next) {
  res.render('registration');
});

router.get('/order', function(req, res, next) {
  res.render('order');
});

//router.get('/login', function(req, res, next) {
 //   res.render('loginpage');
 // });

  router.get('/dashboard', function(req, res, next) {
    res.render('dashboard');
  });

router.post('/registration',function(req,res,next){
console.log(req.body)
  
//pool.query("insert into flights(flightid,companyname,sourcestateid,sourcecityid,destinationstateid,destinationcityid,status,flightclass,sourcetimings,destinationtiming,days,logo)values(?,?,?,?,?,?,?,?,?,?,?,?)",[req.body. flightid,req.body.companyname,req.body.sourcestate,req.body.sourcecity,req.body.destinationstate,req.body. destinationcity,req.body.status,fclass,req.body. sourcetime,req.body.destinationtime,days,req.file.originalname],function(error,result){
pool.query("insert into foods(username,useraddress,useremail,usermobileno,usertype,userchoice,usertimming) values(?,?,?,?,?,?,?)",[req.body.name,req.body.address,req.body.email,req.body.mobileno,req.body.status,req.body.fclass,req.body.sourcetime],function(error,result){

  if(error)
  { 
   console.log(error)
        res.render('registration',{msg:'server error,record not submited'})
  }
  else{
      
    res.render('registration',{msg:'server error,record not submited'})

  }
})
})



router.post('/order',function(req,res,next){
  console.log(req.body)
    
  //pool.query("insert into flights(flightid,companyname,sourcestateid,sourcecityid,destinationstateid,destinationcityid,status,flightclass,sourcetimings,destinationtiming,days,logo)values(?,?,?,?,?,?,?,?,?,?,?,?)",[req.body. flightid,req.body.companyname,req.body.sourcestate,req.body.sourcecity,req.body.destinationstate,req.body. destinationcity,req.body.status,fclass,req.body. sourcetime,req.body.destinationtime,days,req.file.originalname],function(error,result){
  pool.query("insert into orders(username,address,mobileno,foodname,foodtype,foodno)values(?,?,?,?,?,?)",[req.body.name, req.body.address, req.body.mobileno, req.body.foodname, req.body.foodtype, req.body.foodno],function(error,result){
  
    if(error)
    { 
     console.log(error)
          res.render('order',{msg:'server error,record not submited'})
    }
    else{
        
      res.render('order',{msg:'server error,record not submited'})
  
    }
  })
  })
module.exports = router;
