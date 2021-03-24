const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Hashtag extends Model {
    static init(sequelize) {
        return super.init({
          // id가 기본적으로 들어있다.
            name: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
        }, {
            modelName: 'Hashtag',
            tableName: 'hashtags',
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci', // 이모티콘 저장
            sequelize,
        });
    }
  static associate(db) {
      db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' });
  }
};
// module.exports =(sequelize, DataTypes)=>{
//     const Hashtag = sequelize.define('Hashtag',{ //mysql에선 Hashtag가 hashtags 소문자 복수형으로 바뀌어서 저장
//         // id가 기본적으로 들어있다.
//         name:{
//             type:DataTypes.STRING(20),
//             allowNull:false,
//         },
//     }, {
//         charaset:'utf8mb4', //mb4는 이모티콘 추가
//         collate:'utf8mb4_general_ci', //한글 저장       
//     });
//     Hashtag.associate=(db)=>{
//         db.Hashtag.belongsToMany(db.Post,{through:'PostHashtag'});
//     };
//     return Hashtag;
// };