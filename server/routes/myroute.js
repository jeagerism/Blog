const express = require("express");
const router = express.Router();
const {
  getAllblogs,
  create,
  singleBlog,
  remove,
  updatePost,
} = require("../controllers/blog");
const { requireLogin } = require("../controllers/authController");

router.post("/create", requireLogin, create);

router.get("/blogs", getAllblogs);

router.get("/blog/:slug", singleBlog);
router.delete("/blog/:slug", requireLogin, remove);
router.put("/blog/edit/:slug", requireLogin, updatePost);

module.exports = router;
