var connection=require('./../config');                     //collects questions from DB and sends to display for response

module.exports.fform=function(req,res){
      var sql='SELECT * FROM formbuilder.forms';
      connection.query(sql,function(err,results,fields){
        if(err){
          console.log('error' +err.message);
        }

         res.render('./../views/fdisplay.ejs',{data:results});

        console.log(results);


    })
}
