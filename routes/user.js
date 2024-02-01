var router = require("express").Router();

const {create,findAll} = require("../controllers/user.js");

module.exports = app => {
  // Create a new user
  router.post("/", create);

  // Retrieve all users
  router.get("/", findAll);

  // Retrieve all published Tutorials
  //router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
  //router.get("/:id", tutorials.findOne);

  // Update a Tutorial with id
  //router.put("/:id", tutorials.update);

  // Delete a Tutorial with id
  //router.delete("/:id", tutorials.delete);

  // Create a new Tutorial
  //router.delete("/", tutorials.deleteAll);

  app.use('/api/user', router);
};