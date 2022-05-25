const router = require("express").Router();
const Category = require("../models/Category");

//Create Category
router.post("/create", async (req, res) => {
  const newCategory = new Category(req.body);
  try {
    const savedCategory = await newCategory.save();
    res.status(200).json(savedCategory);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

//Get Category
router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

//Delete Category
router.delete("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (category.id === req.body.id) {
      try {
        await category.delete();
        res.status(200).json("Category has been deleted...");
      } catch (err) {
        req.status(500).json(err);
      }
    } else {
      res.status(401).json("you are not allowed to delete this category");
    }
  } catch (err) {
    req.status(500).json(err);
  }
});

module.exports = router;
