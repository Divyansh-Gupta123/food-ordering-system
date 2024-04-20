var mysql=require('mysql')

var pool=mysql.createPool({
host:'localhost',
port:3306,
user:'root',
password:'deepu123',
database:'food',
connectionLimit:100

})
module.exports=pool

//admin/loginpage
//7389785556  -- 1234