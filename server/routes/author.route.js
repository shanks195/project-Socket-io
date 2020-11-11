var express = require('express');
var router = express.Router();

module.exports = router;

router.get("/signin", function(req, res) {
    res.render("web/signin");
});
router.post("/signin", function(req, res) {
    db.get('users').push(req.body).write();
    res.redirect('/');
})

router.get("/home", function(req, res) {
    res.render("web/index"), {
        users: db.get('users').value(),
    };
});