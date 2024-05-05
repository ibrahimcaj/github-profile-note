const express = require('express');

const Note = require('./note');
const Validator = require('./validator');

// initializes the app
const app = express();

// use the validation middleware
app.use(Validator);

app.get('/', async (request, response) => {    
    // creates a new note object
    var note = new Note({
        color: request.query.color,
        rotation: request.query.rotation,
        fill: request.query.fill,
        gradient: request.query.gradient,
    });

    // stores the rendered svg in a variable
    var svg = await note.render(request.query.text);

    response.writeHead(200, {
        'Content-Type': 'image/svg+xml',
        'Content-Length': svg.length
    });
    response.end(svg);
});

app.listen(3000, () => console.log('Server ready on port 3000!')); // im all ears 👂

module.exports = app;