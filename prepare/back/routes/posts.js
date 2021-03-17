const express = require('express');

const {Post,Image,User,Comment} = require('../models');

const router = express.Router();

router.get('/', async (req, res, next)=>{ //GET /posts //여러개 가져오는 것
    try {
        const posts = await Post.findAll({
            limit : 10,
            order :[
                ['createdAt', 'DESC'],
                [Comment, 'createdAt', 'DESC'],
            ],
            include:[{
                model: User,
                attributes: ['id','nickname'],
            }, {
                model: Image,
            }, {
                model: Comment,
                include: [{
                    model: User,
                    attributes: ['id','nickname'],
                }]
            }],
        }); 
        // findAll()모든 게시물 불러옴
        // limit: 10, 열개만 가져옴
        // offset 100 백번째 게사물부터 가져와라
        // offset은 게시글 삭제나 중간에 추가됐을때 순서가 꼬임
        // where : {id: lastId}, 를 주로 사용.
        console.log(posts);
        // npm i morgan
        res.status(200).json(posts);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;