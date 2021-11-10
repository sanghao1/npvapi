const dboperation = require('./dboperation');
var Db =require('./dboperation');
var users  =require('./Users');


var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const { request, response } = require('express');

var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());  
app.use('/index',router);


router.use((request,response,next)=>
{
 console.log('middleware');
 next();

})

router.route('/users').get((request,response)=>{
dboperation.getUsers().then(result=>{
   response.json(result[0]);

   })
})

router.route('/users/:ID').get((request,response)=>{
   dboperation.getUser(request.params.ID).then(result=>{
      response.json(result[0]);
   
      })
   }) 

   router.route('/users').post((request,response)=>{

      let user={...request.body}
      dboperation.addUser(user).then(result=>{
         response.status(201).json(result);
       
         })
      })

      var port = process.env.PORT || 8090;
app.listen(port);
console.log("User API is Runing at "+port);

