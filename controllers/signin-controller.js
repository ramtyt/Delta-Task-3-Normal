var connection=require('./../config');
                                                        //checks username and password of a particular user
module.exports.signin=function(req,res){
  var email=req.body.email;
  var password=req.body.password;

  connection.query(`SELECT * FROM SIGNUP WHERE email=?`,[email],function(err,results,field){
    if(err)
    {
      res.send("404 Error");
      console.log(err.message);
    }
    else {
      if(results.length>0)
       {
         if(password==results[0].password)
         res.render('./../views/dashboard');
         else {
           res.send('email and password doesnot matches');
         }
       }
       else{
         res.send('email does not exists');
       }


    }
  })
}
