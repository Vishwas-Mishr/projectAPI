const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send(<h1>Read the <strong>README</strong> file.</h1>);
});

module.exports = router;
