const express = require('express');
const router = express.Router();
const connection = require('../../helpers/db.js');



router.post('/signup', function (req, res, next) {
    console.log(req.body)
    const query = connection.query('INSERT INTO users (email, password, name, lastname) VALUES (?,?,?,?)', [req.body.email, req.body.password, req.body.name, req.body.lastname], function (err, results, fields) {
        if (err) {
            console.log(err);
            res.status(500).end("There was a SQL error!");
        } else {
            res.send("User added!");
        }
    });
});

module.exports = router;