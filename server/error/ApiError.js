const errorsCode = require("../utils/Constants")

class ApiError extends Error {
    constructor(status, message) {
        super();
        this.status = status
        this.message = message
    }

    static notFound(message) {
        return new ApiError(errorsCode.not_found, message)
    }

    static forbidden(message) {
        return new ApiError(errorsCode.forbidden, message)
    }

    static internal(message) {
        return new ApiError(errorsCode.internal, message)
    }

    static unauthorized(message) {
        return new ApiError(errorsCode.unauthorized, message)
    }
}

module.exports = ApiError