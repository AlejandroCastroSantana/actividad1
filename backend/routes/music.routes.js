module.exports = app => {
    const music = require("../controllers/music.controller.js");

    var router = require("express").Router();

    router.post("/", music.create);

    router.get("/", music.findAll);

    router.get("/:id", music.findOne);

    router.put("/:id", music.update);

    router.delete("/:id", music.delete);

    app.use('/api/music', router);
}