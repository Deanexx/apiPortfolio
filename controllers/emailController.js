const Email = require('../models/emailModel.js');
const sendEmail = require('../utils/email.js');

exports.writeEmail = async (req, res) => {
    try{
        const newEmail = await Email.create(req.body);

        await sendEmail(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                email: newEmail
            }
        })
    } catch(err){
        res.status(400).json({
            status: 'fail',
            error: err
        })
    }
}