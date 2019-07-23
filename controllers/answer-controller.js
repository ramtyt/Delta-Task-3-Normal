var connection=require('./../config');                     //collects Response recorded from user and stores it in DB

module.exports.answer=function(req,res){
  var ans={
    'answer1':req.body.answer1,
    'answer2':req.body.answer2,
    'answer3':req.body.answer3,
    'answer4':req.body.answer4,
    'answer5':req.body.answer5
  }
  connection.query('INSERT INTO ANSWERS SET?', ans, function(err,results,fields){
    if(err)
    {
     console.log("error" +err.message);
    }

    else {
      res.render('./../views/submit.ejs');
    }
  })
}
