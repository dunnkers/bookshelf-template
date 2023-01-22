import handlebars from "handlebars";
import { readFileSync, writeFileSync } from "fs";

// Books
// -> Replace this with your own data (e.g. fetch from an API)
const bookShelves = [
    {
        "name": "Currently reading",
        "books": [
            {
                "title": "Stolen Focus",
                "author": "Johann Hari",
                "link": "https://www.goodreads.com/book/show/57933306-stolen-focus",
                "image_url": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1626718328l/57933306.jpg"
            }
        ],
    },
    {
        "name": "Read",
        "books": [
            {
                "title": "Man's Search for Meaning",
                "author": "Viktor E. Frankl",
                "link": "https://www.goodreads.com/book/show/9700791-man-s-search-for-meaning",
                "image_url": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1589926186l/9700791._SY475_.jpg"
            }
        ],
    }
]

// Variables
const publicURL = process.env.PUBLIC_URL || ""; // e.g. `http://dunnkers.github.io/`
const dateNow = new Date();
const dateString = dateNow.toDateString();
const dateYear = dateNow.getFullYear();
const dateTimeString = dateNow.toTimeString();

// Compile Handlebars 
const handlebarsTemplate = readFileSync("templates/index.hbs", "utf8");
const handlebarsCompiled = handlebars.compile(handlebarsTemplate);
const handlebarsContext = {
    "bookShelves": bookShelves,
    "publicURL": publicURL,
    "dateString": dateString,
    "dateYear": dateYear,
    "dateTimeString": dateTimeString
}
const html = handlebarsCompiled(handlebarsContext);

// Write HTML
writeFileSync("build/index.html", html);
