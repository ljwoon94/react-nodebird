const express = require('express');

const router = express.Router();

router.post('/', (req,res)=>{ //POST /post
    res.json({id:1,content:'작성완료'});
});

router.delete('/', (req,res)=>{ //DELETE /post
    res.json({id:1});
});

module.exports = router;