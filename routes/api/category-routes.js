const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

//category get all route
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{model: Product}]
    })
    res.status(200).json(categoryData)
  } catch (err) {
    res.status(404).json(err)
  }
});

//categpry get specific route
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{model: Product}]
    })
    res.status(200).json(categoryData)
  } catch (err) {
    res.status(404).json(err)
  }
});

//category post route
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(404).json(err)
  }
});


//category put route
router.put('/:id', async (req, res) => {
  try{
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(categoryData)
  }catch (err) {
    res.status(404).json(err)
  }
});


//category delete route
router.delete('/:id', async(req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(categoryData)
  } catch (err) {
    res.status(404).json(err)
  }
});

module.exports = router;