
var express = require('express');
module.exports = {
    uniformCRUD: function (Model) {

        var router = express.Router();

        router.post('/', function (req, res) {
            (new Model(req.body)).save(function (err, result) {
                if (err) res.status(500).json({ message: err });
                else res.status(201).json({ message: 'Resource Created', contact: result });
            });
        });

        router.get('/', function (req, res) {
            Model.find(function (err, results) {
                // todo: return only the first 10 results and paginate service ...
                if (err) res.status(500).json({message: 'Something went wrong!'});
                res.status(200).json(results);
            });
        });

        router.get('/:id', function (req, res) {
            Model.findById(req.params.id, function (err, results) {
                // todo: return only the first 10 results and paginate service ...
                if (err) res.status(500).json({message: 'Something went wrong!'});
                res.status(200).json(results);
            });
        });

        router.put('/:id', function (req, res) {
            Model.findByIdAndUpdate(req.params.id, {
                $set: req.body
            },function (err, results) {
                // todo: return only the first 10 results and paginate service ...
                if (err) res.status(500).json({message: 'Something went wrong!'});
                res.status(200).json({ message: 'Updated!' });
            });
        });

        router.delete('/:id', function (req, res) {
            Model.findByIdAndRemove(req.params.id, function (err, results) {
                // todo: return only the first 10 results and paginate service ...
                if (err) res.status(500).json({message: 'Something went wrong!'});
                res.status(200).json(results);
            });
        });

        // return a router
        return router;

    }
};