const db = require("../models");
const Users = db.users;
const Op = db.Sequelize.Op;
const findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  Users.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
const create = (req,res) => {
  Users.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the user."
    });
  });
}
module.exports = {
  create,
  findAll
}