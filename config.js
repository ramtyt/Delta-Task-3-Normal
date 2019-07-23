var mysql =require('mysql');                 //Requiring mysql

var connection=mysql.createConnection({      //creating a connection with mysql
  host:'localhost',
  user:'root',
  password:'MRV99<3mysql',
  database:'formbuilder'
});

connection.connect(function(err){            //connecting to mysql
  if(err)
  {
    console.log("error" +err.message);
  }
  else {
    {
      console.log("Connection to database is successfull");
    }
  }
});

module.exports=connection;                  //exporting the module
