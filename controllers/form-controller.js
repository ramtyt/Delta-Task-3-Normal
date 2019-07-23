var connection=require('./../config');
                                                 //stores questions from user into DB
module.exports.form=function(req,res){
  var question={

    'title':req.body.title,
    'description':req.body.description,
    'question1':req.body.question1,

    'question2':req.body.question2,

    'question3':req.body.question3,

    'question4':req.body.question4,

    'question5':req.body.question5,

  }
  connection.query('INSERT INTO FORMS SET?',question,function(err,results,fields){
    if(err)
    {
      console.log('error' +err.message);
    }
    else {
      res.render('./../views/thanks.ejs')
     }
  })
}
