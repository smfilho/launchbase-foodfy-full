const data = require('../data.json');

exports.index = function(req, res) {
  return res.render('index', { items: data.recipes });
}

exports.about = function(req, res) {
  return res.render('about');
}

exports.recipes = function(req, res) {
  return res.render('recipes', { items: data.recipes });
}

exports.recipe = function (req, res) {
  const id = req.params.id;

  return res.render('recipe', { recipe: data.recipes[(+id)-1] });
}