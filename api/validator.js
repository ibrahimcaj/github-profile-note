const error = require("./error");

module.exports = (request, response, next) => {
    if (request.path === "/") {
        if (!request.query.text) return error(response, 'No text :('); // if the text is not provided, return an error

        const invalidParams = Object.keys(request.query).filter((parameter) => {
            const value = request.query[parameter];

            // checks if the value is a number
            var isNumber = (number) => { return !isNaN(parseInt(number)); }

            switch (parameter) {
                case 'rotation':
                    return !isNumber(value);
                default:
                    return false;
            }
        });
        
        if (invalidParams.length === 0) next(); // call the next middleware or route handler
        else error(response, `Invalid parameter value provided :(`);
    } else error(response, 'Not found :(');
};
