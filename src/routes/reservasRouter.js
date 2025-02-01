const {Router} = require("express");
const { getReservaHandler, getDetailHandler, createReserva } = require("../handlers/reservasHandler");
const reservasRouter = Router();

reservasRouter.get("/", getReservaHandler)
reservasRouter.get("/:id", getDetailHandler)
reservasRouter.post("/", createReserva)

module.exports = reservasRouter;