module.exports =(sequelize, DataTypes)=>{
    const User = sequelize.define('User',{ //mysql에선 User가 users 소문자 복수형으로 바뀌어서 저장
        // id가 기본적으로 들어있다.
        email:{
            type: DataTypes.STRING(30),
            allowNull: false, // 필수 여부 false필수다.
            unique: true, // 고유한 값 여부 true는 ok
        },
        nickname:{
            type: DataTypes.STRING(30),
            allowNull: false, // 필수 여부 false필수다.
        },
        password:{
            type: DataTypes.STRING(100),
            allowNull: false, // 필수 여부 false필수다.
        },
    }, {
        charaset:'utf8',
        collate:'utf_general_ci', //한글 저장       
    });
    User.associate=(db)=>{};
    return User;
};