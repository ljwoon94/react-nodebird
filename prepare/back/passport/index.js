const passport = require('passport');
// passport 설정파일

const local = require('./local');
const { User } = require('../models');
module.exports = () =>{
    passport.serializeUser((user, done) =>{
        done(null, user.id);
    });
    //세션에 모든 정보를 들고 있기엔 너무 무거워 user.id만 빼옴
    passport.deserializeUser(async(id, done) =>{
        try{
            const user = await User.findOne({
                 where: { id }, 
            });
            done(null, user);
        } catch (error) {
            console.error(error);
            done(error);
        }
    });
    local();
};