module.exports = {
  index(req, res) {
    return res.render('admin/recipes');
  },
  create(req, res) {
    return res.render('admin/create');
  },
  post(req, res) {
    const keys = Object.keys(req.body)

    for (key in keys) {
      if (req.body[key] == '') {
        return res.send('Fields must not be empty!');
      }
    }

    const query = `
      INSERT INTO recipes (
        image,
        title,
        ingredients,
        preparation,
        information,
        created_at
      ) VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING id
    `

    const values = [
      req.body.image,
      req.body.title,
      req.body.ingredients,
      req.body.preparation,
      req.body.information,
      date(Date.now()).iso
    ]
    return;
  },
  show(req, res) {
    return res.render('admin/show');
  },
  edit(req, res) {
    return res.render('admin/edit');
  },
  put(req, res) {
    return;
  },
  delete(req, res) {
    return;
  },
}