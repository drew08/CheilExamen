const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.render('new-hotel.html');
});

module.exports = router;