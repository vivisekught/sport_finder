class ErrorsCode {
    static get unauthorized() {
        return 401;
    }

    static get forbidden() {
        return 403;
    }

    static get not_found() {
        return 404;
    }

    static get internal() {
        return 500;
    }
}

module.exports = ErrorsCode
