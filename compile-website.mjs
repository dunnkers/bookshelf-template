import handlebars from 'handlebars';
import { readFileSync, writeFileSync } from 'fs';

const books = {
    "current": {
        "books": [
            {
                "book": {
                    "image_url": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1626718328l/57933306.jpg",
                    "title": "Stolen Focus",
                    "link": "https://www.goodreads.com/book/show/57933306-stolen-focus",
                    "authors": {
                        "author": {
                            "name": "Johann Hari"
                        }
                    }
                }
            }
        ],
    },

    "read": {
        "books": [
            {
                "book": {
                    "image_url": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1589926186l/9700791._SY475_.jpg",
                    "title": "Man's Search for Meaning",
                    "link": "https://www.goodreads.com/book/show/9700791-man-s-search-for-meaning",
                    "authors": {
                        "author": {
                            "name": "Viktor E. Frankl"
                        }
                    }
                }
            }
        ],
    }
}


const today = new Date();
const todayString = today.toDateString();
const todayTime = today.toTimeString();
const year = today.getFullYear();

// Compile said template
var template = readFileSync('templates/index.hbs', 'utf8');
var compiled = handlebars.compile(template);
var html = compiled({
    PUBLIC_URL: process.env.PUBLIC_URL || "",
    year,
    "read": books["read"].books,
    "current": books["current"].books,
    todayString,
    todayTime
});

// Write HTML file
writeFileSync('build/index.html', html);
