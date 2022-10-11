const {DataTypes}  = require("sequelize") ;
const  db = require('../db/db.js') ;

const Categorie = db.define('categorie',{
    title :{
          type : DataTypes.STRING,
          allowNull : false
    },
    description : {
       type : DataTypes.TEXT,
       allowNull :  true
    },
});

module.exports = Categorie 