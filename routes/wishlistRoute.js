const express = require("express");

const authService = require("../Controllers/authController");

const {
  addProductToWishlist,
  removeProductFromWishlist,
  getLoggedUserWishlist,
} = require("../Controllers/wishlistController");

const router = express.Router();

router.use(authService.protect, authService.allowedTo("user"));

router.route("/").post(addProductToWishlist).get(getLoggedUserWishlist);

router.delete("/:productId", removeProductFromWishlist);

module.exports = router;
