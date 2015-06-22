var router = require('express').Router();
var mongoose = require('mongoose');

var myrest = require('../modules/rest_crud');

// Create the Contact Model

var Contact = mongoose.model('contact', {
    name: String,
    email: String
});

module.exports = myrest.uniformCRUD(mongoose.model('contact', {
    name: String,
    email: String
}));

/*
var Contact = mongoose.model('contact', {
    name: String,
    email: String
});

router.post('/', function(req, res) {
    ( new Contact(req.body) ).save( function(err, result) {
        if (err) { res.status(500).json( { message: err } ); }

        else res.status(201).json( { message: 'Resourec Created', contact: result } );
    });
});

router.get('/', function(req, res) {
    Contact.find( function(err, results) {
        if (err) res.status(500).json( { message: err } );

        else res.status(200).json(results);
    });
});

router.get('/:id', function (req, res) {
    Contact.findById(req.params.id, function (err, results) {
        // todo: return only the first 10 results and paginate service ...
        if (err) res.status(500).json({message: 'Something went wrong!'});
        res.status(200).json(results);
    });
});

router.put('/:id', function (req, res) {
    Contact.findByIdAndUpdate(req.params.id, {
        $set: req.body
    },function (err, results) {
        // todo: return only the first 10 results and paginate service ...
        if (err) res.status(500).json({message: 'Something went wrong!'});
        res.status(200).json({ message: 'Updated!' });
    });
});

router.delete('/:id', function (req, res) {
    Contact.findByIdAndRemove(req.params.id, function (err, results) {
        // todo: return only the first 10 results and paginate service ...
        if (err) res.status(500).json({message: 'Something went wrong!'});
        res.status(200).json(results);
    });
});


module.exports = router;
*/