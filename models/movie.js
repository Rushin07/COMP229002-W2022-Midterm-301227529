// Author name: Rushin Barvadia
// Student Id: 301227529
// WebApp name: COMP229022-W2022-Midterm-302117529
let mongoose = require('mongoose');

// Create a model class
let movieModel = mongoose.Schema(
    {
        Title: String,
        Synopsis: String,
        Year: Number,
        Director: String,
        Genre: String
    },
    {
        collection: "movies"
    }
);

module.exports = mongoose.model('Movie', movieModel);