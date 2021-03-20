const express = require('express');
const {Op} = require('sequelize');
const {Post,Image,User,Comment} = require('../models');

const router = express.Router();

router.get('/', async (req, res, next)=>{ //GET /posts //여러개 가져오는 것
    try {
        const where = {};
        if (parseInt(req.query.lastId, 10)) { // 초기 로딩이 아닐 때
            where.id = { [Op.lt]: parseInt(req.query.lastId, 10)}
        }   // 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1
            // 만약 lastId가 12면 12보다 작은 10개의 게시물을 불러옴.
            // Op.lt는 보다 작은 OP는 오퍼레이터 연산자
        const posts = await Post.findAll({
            where,
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
                }],
            }, {
                model:User, //좋아요 누른 사람
                as: 'Likers',
                attributes:['id'],
            }, {
                model: Post,
                as: 'Retweet',
                include: [{
                    model: User,
                    attributes: ['id', 'nickname'],
                    }, {
                        model: Image,
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