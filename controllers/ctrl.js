const Categorie = require("../models/categorie.js");


const getAll = (req, res) => {
    Categorie.findAll()
        .then(categorie => {
            res.render('categorie', { categorie: categorie })
        })
        .catch()
};


const createOne = (req, res) => {
    const { body } = req
    Categorie.create({...body })
    .then(res.redirect('/getAll'))
    .catch(error => res.status(500).json(error))
};


const getOne = (req, res) => {
    const { id } = req.body
    Categorie.findByPk(id)
        .then(categorie => {
            res.render('updateForm', { categorie: categorie });
        })
}


const updateOne = (req, res) => {
    const { body } = req;
    const id = body.id
    Categorie.findByPk(id)
    .then(categorie => {
        categorie.title = body.title
        categorie.description = body.description
        categorie.save()
        .then(() => {
            res.redirect('/getAll')
        })
    })
}



const deleteOne = (req, res) => {
    const { id } = req.body
    Categorie.destroy({ where: { id: id } })
        .then(() => {
            res.redirect('/getAll')
        })
        .catch();
}

module.exports = { getAll , getOne, createOne , updateOne , deleteOne };