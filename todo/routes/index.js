var express = require('express');

const todostuct = require('../database/todo');
var router = express.Router();

/* GET home page. */
router.get('/', function(_req, res, _next) {
  todostuct.find()
  .then((entry)=>{
    res.render('index', { title: 'Express' , entry});
  })
  
});

router.post('/todo',(req,res)=>{
  var data={task:req.body.task}
  var details=todostuct(data)
  details.save()
  res.redirect('/')
})

router.get('/edit/:id',(req,res)=>{
  const id = req.params.id
  
  todostuct.findOne({_id:id})
  .then((up)=>{
    res.render('editpg',{up})
  })
  
})

router.post('/:id',(req,res)=>{
  const id = req.params.id
  var details ={task:req.body.task}
  todostuct.findByIdAndUpdate(id,details)
  .then(()=>{
    res.redirect('/')
  })
  
})

router.get('/delete/:id',(req,res)=>{
  const id = req.params.id
  todostuct.findByIdAndDelete(id,(err,doc)=>{
    if(err){
      console.log("Error Occured"+err);
    }else{
      console.log("SUCESSFULLY DELETED"+doc);
    }
  })
 
  res.redirect('/')
})

module.exports = router;
