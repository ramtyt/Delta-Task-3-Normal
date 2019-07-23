var connection=require('./../config');                     //collects answers from DB and send it to response view 

module.exports.resp=function(req,res){
  var sql='SELECT * FROM formbuilder.answers';
  connection.query(sql,function(err,results,fields){
    if(err)
    {
      console.log('error' +err.message);
    }
    else {
      res.render('./../views/response.ejs',{data:results});
      console.log(results);
    }
  })
}
