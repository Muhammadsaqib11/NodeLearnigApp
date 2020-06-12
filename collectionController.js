
Contact = require('./contactModel');

exports.collectionReport = function(req, res){
    Contact.get(function(err,contacts){
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Collection Report",
            data: contacts
        });
    });
}