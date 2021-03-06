const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Image extends Model {
    static init(sequelize) {
        return super.init({
          // id가 기본적으로 들어있다.
            src: {
                type: DataTypes.STRING(200),
                allowNull: false,
            },
          }, {
                modelName: 'Image',
                tableName: 'images',
                charset: 'utf8',
                collate: 'utf8_general_ci',
                sequelize,
          });
      }
    static associate(db) {
        db.Image.belongsTo(db.Post);
    }
};

// module.exports =(sequelize, DataTypes)=>{
//     const Image = sequelize.define('Image',{ //mysql에선 Image가 images 소문자 복수형으로 바뀌어서 저장
//         // id가 기본적으로 들어있다.
//         src:{
//             type:DataTypes.STRING(200),
//             allowNull:false,
//         },
//     }, {
//         charaset:'utf8',
//         collate:'utf8_general_ci', //한글 저장       
//     });
//     Image.associate=(db)=>{
//         db.Image.belongsTo(db.Post);
//     };
//     return Image;
// };