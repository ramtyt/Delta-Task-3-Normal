var express=require('express');
var ejs=require('ejs');
var bodyParser=require('body-parser');              //requiring all required modules
var config=require('./config');
var app=express();

app.set('view engine','ejs');                      //view engine is set to ejs
app.use(express.static('./stylesheets'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


var signupcontroller=require('./controllers/signup-controller');
var signincontroller=require('./controllers/signin-controller');
var formcontroller=require('./controllers/form-controller');
var formviewcontroller=require('./controllers/formview-controller');        //requiring user created controllers for respective pages
var fformcontroller=require('./controllers/fform-controller');
var answercontroller=require('./controllers/answer-controller');
var responsecontroller=require('./controllers/responsecontroller');


//Handling get and post requests


app.get('/signup' ,function(req,res){
  res.render('signup');
})
app.post('/signup/dashboard', signupcontroller.signup);


app.get('/signin',function(req,res){
  res.render('signin');
})
app.post('/signin/dashboard',signincontroller.signin);


app.post('/dashboard/thanks',formcontroller.form);

app.post('/dashboard/thanks/view',formviewcontroller.formview);

app.get('/form1',function(req,res){
  res.render('fsignin');
})

app.post('/form1/form',fformcontroller.fform);

app.post('/submit' ,function(req,res){
  res.render('submit')
})

app.get('/frsignin',function(req,res){
  res.render('frsignin');
})
app.post('/frsignin/response1',function(req,res){
  res.render('response1');
})
app.post('/form/submit',answercontroller.answer);
app.post('/response1/response',responsecontroller.resp);


//Listening to port 3000

app.listen(3000,function(err){
  if(err)
  {
    console.log("error" +err.message);
  }
  else {
    {
      console.log('Listening to port 3000');
    }
  }
});
