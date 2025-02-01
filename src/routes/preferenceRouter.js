const {Router} = require('express');
const { postPreference } = require('../handlers/preferenceHandler');

const preferenceRouter = Router();

preferenceRouter.post("/", postPreference)
 
module.exports = preferenceRouter;