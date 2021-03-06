
// import model 

Contact = require('./contactModel');

exports.index = function(req, res){
    Contact.get(function(err,contacts){
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Contacts retrieved successfully",
            data: contacts
        });
    });
}
