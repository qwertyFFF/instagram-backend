const Post = require('../models/Post');

module.exports = {
  async new(req, res) {
    const new_like = await Post.findById(req.params.id);

    new_like.likes += 1;

    await new_like.save();

    req.io.emit('new_like', new_like);

    return res.json(new_like);
  }
};
