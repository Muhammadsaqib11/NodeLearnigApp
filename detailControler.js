
Contact = require('./contactModel');

exports.detailReport = function(req, res){
    Contact.get(function(err,contacts){
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Detail Report",
            data: contacts
        });
    });
}