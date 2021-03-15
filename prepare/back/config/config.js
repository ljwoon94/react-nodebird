const dotenv= require('dotenv');

dotenv.config();
// config.json을 config.js로 바꾸고 dotenv로 바꿔라
//그럼 .env에 보호되고 있는 변수명으로 바꿀 수 있다.

module.exports = {
  "development": {
    "username": "root",
    "password": process.env.DB_PASSWORD,
    "database": "react-nodebird",
    "host": "127.0.0.1",
    "port": "3306",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": process.env.DB_PASSWORD,
    "database": "nodebird",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": process.env.DB_PASSWORD,
    "database": "nodebird",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
