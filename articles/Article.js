const Sequelize = require("sequelize");
const connection = require("../database/database");
//Quando for usar um relacionamento um pra muitos deve ser importado o model//
const Category = require("../categories/Category");

const Article = connection.define('articles',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Category.hasMany(Article); // UMA Categoria tem muitos artigos
Article.belongsTo(Category); // UM Artigo pertence a uma categoria
// Sincroniza o relacionamento no banco. O que é feito aqui, deve ser replicado no category
// ou no resto das model.
// Article.sync({force:true})

module.exports = Article;