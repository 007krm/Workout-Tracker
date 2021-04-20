var path = require("path");
const router = require('express').Router();

  
  router.get("/", function(req,res){    
      res.sendFile(path.join(__dirname,"../views/index.html"));
  });

  router.get("/stats",function(req,res){   
      res.sendFile(path.join(__dirname,"../views/stats.html"));
  });

  router.get("/exercise",function (req,res){   
    res.sendFile(path.join(__dirname,"../views/exercise.html"));
});


module.exports = router;