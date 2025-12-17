const ClientErrorCodes = Object.freeze({
    BAD_REQUEST: 400,
    USER_ALREADY_EXISTS: 409,
    USER_NOT_FOUND: 404,
    INVALID_CREDENTIALS: 401,
    UNAUTHORIZED_ACCESS: 403
});

const ServerErrorCodes = Object.freeze({
    INTERNAL_SERVER_ERROR: 501,
    NOT_IMPLEMENTED: 500
});

const SuccessCodes = Object.freeze({
    CREATED: 201,
    OK: 200
});

module.exports = Object.freeze({
    ClientErrorCodes,
    ServerErrorCodes,
    SuccessCodes
});
