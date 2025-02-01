const {Router} = require("express");
const { postReviewHandler } = require("../handlers/postHandler");

const postRouter = Router();

postRouter.post("/", postReviewHandler)

module.exports = postRouter;