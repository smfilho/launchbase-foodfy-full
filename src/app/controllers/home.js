module.exports = {
  index(req, res) {
  return res.render('index');
  },
  about(req, res) {
  return res.render('about');
  },
  recipes(req, res) {
  return res.render('recipes');
  },
  recipe(req, res) {
  return res.render('recipe');
  },
}