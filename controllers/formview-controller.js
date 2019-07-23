var connection=require('./../config');                   //collects questions created by user from DB and sends it to display page

module.exports.formview=function(req,res){
      var sql='SELECT * FROM formbuilder.forms';
      connection.query(sql,function(err,results,fields){
        if(err){
          console.log('error' +err.message);
        }

         res.render('./../views/display.ejs',{data:results});

         console.log(results);


    })
}
