const Fonts = require('./fonts.json');
const Colors = require('./colors.json');

class Note {
    constructor({ color = 'yellow', rotation = 10, fill }) {
        this.fill = (Colors[color] || 'yellow') || fill;
        this.rotation = rotation;
    }

    format(string) { // formats the provided string
        string = string.toLowerCase().split('\\n'); // splits the string by the newline character

        // splits the string into chunks, and then those chunks into substrings
        const splitString = (string) => {
            const chunks = [];
            // splits the string into chunks of 14 characters
            for (let i = 0; i < string.length; i += 14) {
                chunks.push(string.substr(i, 14)); // pushes the chunk into the array
            }
            return chunks; // returns the chunk array
        };

        // maps the string array to the splitString function, and then flattens the array
        var lines = string.map((line) => splitString(line)).flat();
            lines = lines.slice(0, 4); // limits the number of lines to 4

        return lines;
    }

    async render(text) { // takes in the text and then renders it as an svg
        var result = await this.format(text); // formats the text
        
        return `
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="100" height="100" viewBox="0 0 200 200" font-family="BrownBagLunch">
                <style>
                    /* specifying the fonts */
                    @font-face {
                        font-family: 'BrownBagLunch';
                        src: url('${Fonts['brownbaglunch-woff2']}') format('woff2'),
                            url('${Fonts['brownbaglunch-woff']}') format('woff');
                    
                        font-weight: 400;
                        font-style: normal;
                    }

                    * {
                        /* specifying the font size */
                        font-size: 28px;
                        font-family: 'BrownBagLunch';
                    }
                </style>

                /* the rendered svg */
                <rect x="31" y="31" width="140.571429" height="140.571429" fill="${this.fill}" transform="rotate(${this.rotation})" transform-origin="center center" />
                <rect x="31" y="31" width="140.571429" height="14.0714286" fill="black" fill-opacity="0.5" style="mix-blend-mode:overlay" transform="rotate(${this.rotation})" transform-origin="center center" />

                <text y="68" fill="black" transform="rotate(${this.rotation})" transform-origin="center center">
                    ${result.map((line, index) => `<tspan x="36" dy="${index === 0 ? 0 : 1}em">${line}</tspan>`).join('')}
                </text>
            </svg>
        `;
    }
}
module.exports = Note;