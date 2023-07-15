const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send("<h1>Read the <a href=\"https://github.com/Vishwas-Mishr/projectAPI/blob/main/README.md\" target=__blank><strong>README</strong> file.</a></h1>");
});

module.exports = router;
