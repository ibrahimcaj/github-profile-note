const Note = require('./note');

module.exports = async (response, message) => {
    var note = new Note({ color: 'red' }); // creates a new blank note object

    var svg = await note.render(message); // renders the error message

    response.writeHead(200, { // sends the response
        'Content-Type': 'image/svg+xml',
        'Content-Length': svg.length
    });
    response.end(svg); // ends the response
}