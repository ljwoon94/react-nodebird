module.exports =(sequelize, DataTypes)=>{
    const Comment = sequelize.define('Comment',{ //mysql에선 Comment가 comments 소문자 복수형으로 바뀌어서 저장
        // id가 기본적으로 들어있다.
        content:{
            type:DataTypes.TEXT,
            allowNull:false,
        },
        // User_id:{}
        // Post_id:{}
    }, {
        charaset:'utf8mb4', //mb4는 이모티콘 추가
        collate:'utf8mb4_general_ci', //한글 저장       
    });
    Comment.associate=(db)=>{
        db.Comment.belongsTo(db.User);
        db.Comment.belongsTo(db.Post);
    };
    return Comment;
};