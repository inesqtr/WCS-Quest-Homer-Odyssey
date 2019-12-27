const express = require('express');
const router = express.Router();
const connection = require('../../helpers/db.js');



router.post('/signup', function (req, res, next) {
    console.log(req.body)
    const query = connection.query('INSERT INTO users (email, password, name, lastname) VALUES (?,?,?,?)', [req.body.email, req.body.password, req.body.name, req.body.lastname], function (err, results, fields) {
        if (err)
            res.status(500).json({ flash: err.message });
        else
            res.status(200).json({ flash: "User has been signed up!" });
    });
});

module.exports = router;