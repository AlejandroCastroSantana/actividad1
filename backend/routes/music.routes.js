module.exports = app => {
    const music = require("../controllers/music.controller");
    var upload = require('../multer/upload');

    var router = require("express").Router();

    // Create a new Music
    router.post("/", upload.single('file'), music.create);

    // Retrieve all Musics
    router.get("/", music.findAll);

    router.get("/:id", music.findOne);

    router.put("/:id", music.update);

    router.delete("/:id", music.delete);

    app.use('/api/music', router);
}