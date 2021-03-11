module.exports =(sequelize, DataTypes)=>{
    const Post = sequelize.define('Post',{ //mysql에선 Post가 Posts 소문자 복수형으로 바뀌어서 저장
        // id가 기본적으로 들어있다.
        content:{
            type:DataTypes.TEXT,
            allowNull:false,

        },
    }, {
        charaset:'utf8mb4', //mb4는 이모티콘 추가
        collate:'utf8mb4_general_ci', //한글 저장       
    });
    Post.associate=(db)=>{
        db.Post.belongsTo(db.User);
        db.Post.belongsToMany(db.Hashtag);
        db.Post.hasMany(db.Comment);
        db.Post.hasMany(db.Image);
        db.Post.belongsToMany(db.User, {through:'Like', as:'Likers'});
        db.Post.belongsTo(db.Post,{as:'Retweet'});
    };
    return Post;
};