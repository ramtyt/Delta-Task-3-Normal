var connection=require('./../config');        //controlls signup page by getting the values from user and storing it 

module.exports.signup=function(req,res){
  var today=new Date();
  var users={

    'username':req.body.username,
    'email':req.body.email,
    'password':req.body.password,
    'created_at':today,
    'updated_at':today
  }
  connection.query('INSERT INTO SIGNUP SET ?',users,function(err,results,fields){
    if(err){
    res.send("404 Error");
    console.log(err.message);
  }
  else{
    res.render('./../views/dashboard.ejs');
  }
  })
}
