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

const router = Router();

router.post('/countries/bulk', createBulkCountries)

router.get('/countries', getAllCountries)
router.get('/countries/:id', getCountryId)
//!router.get('/countries/name', getCountryName) --> NO SIRVE

router.post('/activities', postActivities)
router.get('/activities', getActivities)

module.exports = router;
