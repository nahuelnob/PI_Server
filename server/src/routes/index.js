const { Router } = require("express");
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Middlewares de Country
const getAllCountries = require('../middleware/getAllCountries');
const createBulkCountries = require("../middleware/createBulkCountries");
const getCountryId = require('../middleware/getCountryId')
//!const getCountryName = require('../middleware/getCountryName') --> NO SIRVE (elimianr middleware)
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Middlewares de Activity
const getActivities = require('../middleware/getActivities')
const postActivities = require('../middleware/postActivities')
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Middlewares de User
const getUser = require('../middleware/getUser')
const postUser = require('../middleware/postUser');
const getAllUser = require("../middleware/getAllUser");
//////////////////////////////////////////////////////////////////////////////////////////////////////////


const router = Router();

router.post('/countries/bulk', createBulkCountries)

router.get('/countries', getAllCountries)
router.get('/countries/:id', getCountryId)
//!router.get('/countries/name', getCountryName) --> NO SIRVE

router.post('/activities', postActivities)
router.get('/activities', getActivities)

router.get('/user', getUser)
router.get('/user/all', getAllUser)
router.post('/user', postUser)

module.exports = router;
