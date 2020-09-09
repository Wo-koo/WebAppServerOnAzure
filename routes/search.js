const express = require('express');
const router = express.Router();

router.get("/:searchText",(req,res)=>{
    console.log("client/search's req = " + req.params.searchText);

    return res.status(200).json({msg:"查询成功"});
});


module.exports = router;