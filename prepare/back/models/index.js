const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db={};

const sequelize= new Sequelize(config.database, config.username, config.password, config)

db.Comment = require('./comment')(sequelize,Sequelize);
db.Hashtag = require('./hashtag')(sequelize,Sequelize);
db.Image = require('./image')(sequelize,Sequelize);
db.Post = require('./post')(sequelize,Sequelize);
db.User = require('./user')(sequelize,Sequelize);
//models에 있는 관계설정을 불러옴

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
//연결해줌

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
