const data = require('../data.json');

exports.index = function(req, res) {
  return res.render("admin/recipes", { items: data.recipes });
}

exports.create = function(req, res) {
  return res.render('admin/create');
}

exports.show = function(req, res) {
  const { id } = req.params; 

  const recipe = {
    ...data.recipes[id-1],
    id: id
  }
  
  return res.render('admin/show', { recipe });
}

exports.edit = function(req, res) {
  const { id } = req.params;

  const recipe = {
    ...data.recipes[id-1],
    id: id
  }

  return res.render('admin/edit', { recipe });
}

exports.post = function(req, res) {

}

exports.put = function(req, res) {
}

exports.delete = function(req, res) {
}
