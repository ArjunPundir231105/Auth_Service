const {StatusCodes} = require('http-status-codes');

class AppError extends Error {
    constructor(
        name = 'AppError',
        message = 'Something went wrong',
        statusCode = StatusCodes.INTERNAL_SERVER_ERROR, 
        explanation = 'Internal Server Error',
    ) {
        this.message = message;
        this.name = name;
        this.statusCode = statusCode;
        this.explanation = explanation;
    }
}
module.exports = AppError;