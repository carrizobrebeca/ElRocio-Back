const {Router} = require("express");
const reservasRouter = require("./reservasRouter");
const postRouter = require("./postRouter");
const preferenceRouter = require("./preferenceRouter");
// const preferenceRouter = require("./preferenceRouter");

const mainRouter = Router();

mainRouter.use("/reservas", reservasRouter)
mainRouter.use("/post", postRouter);
mainRouter.use("/create_preference", preferenceRouter)


module.exports = mainRouter;