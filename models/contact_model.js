
var mongoose = require('mongoose');

var ContactModel = mongoose.model('contact', {
    name: {
        type: String
    },

    email: {
        type: String
    }
});

module.exports = ContactModel;