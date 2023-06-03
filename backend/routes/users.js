const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    res.json('here is where all the users would be');
    //User.find()
    //    .then(users => res.json('aqui seriam os usuarios'))
    //    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    res.json('User: ' + username)
    //const newUser = new User({username})

    //newUser.save()
    //.then(() => res.json('User: ' + username))
    //.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;