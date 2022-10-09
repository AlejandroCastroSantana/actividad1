const { music } = require("../models");
const db = require("../models");
const Music = db.music;
const Op = db.Sequelize.Op;

//Create and save new music
exports.create = (req, res) => {
  //validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    //Create a music
    const music = {
        name: req.body.name,
        duration: req.body.duration
    };

    //save music in the database
    Music.create(music)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error ocurred while creating the music."
            });
        });
};

exports.findAll = (req, res) => {
    Music.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "some error ocurred while retrieving music"
        });
    });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

  Music.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find music with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving music with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Music.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Music was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update music with id=${id}. Maybe music was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating music with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Music.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Music was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete music with id=${id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete music with id=" + id
      });
    });
};