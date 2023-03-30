const express = require('express');
const { createRole } = require('../../controllers/users/userRole.controller');
const router = express.Router()

// router.use('/', createRole);

router.post('/', createRole)
module.exports = router;