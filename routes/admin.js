var express = require('express');
var router = express.Router();
var pool=require("./pool")
/* GET users listing. */

router.get('/loginpage', function(req, res, next) {
  res.render('loginpage',{msg:''});
});


router.get('/logoutpage', function(req, res, next) {
   res.render('loginpage',{msg:''});
});
router.post('/checkadminlogin',function(req,res){
console.log(req.body)
    pool.query("select * from admins where (email=? or mobileno=?) and password=? ",[req.body.userid,req.body.userid,req.body.password],function(error,result){
        if(error)
        {console.log(error)
            console.log(req.body)
            res.render("loginpage",{msg:"server error"})
        }
        else{
            if(result.length==1)
            {  
                res.render("dashboard")
            }
            else{ 
                console.log (error)
                res.render("loginpage",{msg:"Invalid User id/password"})
            }
        }

    })
 }) 

module.exports = router;            