const Email = require('../models/emailModel.js');
const sendEmail = require('../utils/email.js');
const catchAsync = require('./../utils/catchAsync');


exports.writeEmail = catchAsync(async (req, res, next) => {
        const newEmail = await Email.create(req.body);

        await sendEmail(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                email: newEmail
            }
        })
})

