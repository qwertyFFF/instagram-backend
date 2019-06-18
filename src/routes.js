const express = require("express");
const multer = require('multer');
const uploadConfig = require('./config/upload');
const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.get("/posts", PostController.posts);
routes.post("/new", upload.single('image'), PostController.new);
routes.post('/post/:id/like', LikeController.new);

module.exports = routes;
