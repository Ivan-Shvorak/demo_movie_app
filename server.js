const express = require('express');
const app = express();
const PORT = 3000;

const movies = {
  'action': [
    { title: 'Mad Max: Fury Road', imdb: 8.1 },
    { title: 'John Wick', imdb: 7.4 },
    { title: 'Die Hard', imdb: 8.2 },
    { title: 'The Dark Knight', imdb: 9.0 },
    { title: 'Inception', imdb: 8.8 },
    { title: 'Gladiator', imdb: 8.5 },
    { title: 'The Matrix', imdb: 8.7 },
    { title: 'Terminator 2: Judgment Day', imdb: 8.5 },
    { title: 'Saving Private Ryan', imdb: 8.6 },
    { title: 'Braveheart', imdb: 8.3 }
  ],
  'comedy': [
    { title: 'Superbad', imdb: 7.6 },
    { title: 'The Hangover', imdb: 7.7 },
    { title: 'Step Brothers', imdb: 6.9 },
    { title: 'Anchorman', imdb: 7.2 },
    { title: 'Zoolander', imdb: 6.5 },
    { title: 'Dumb and Dumber', imdb: 7.3 },
    { title: 'Groundhog Day', imdb: 8.0 },
    { title: 'Caddyshack', imdb: 7.3 },
    { title: 'Monty Python and the Holy Grail', imdb: 8.2 },
    { title: 'The Big Lebowski', imdb: 8.1 }
  ],
  'drama': [
    { title: 'Forrest Gump', imdb: 8.8 },
    { title: 'The Shawshank Redemption', imdb: 9.3 },
    { title: 'Schindler’s List', imdb: 8.9 },
    { title: 'The Godfather', imdb: 9.2 },
    { title: '12 Angry Men', imdb: 9.0 },
    { title: 'The Godfather Part II', imdb: 9.0 },
    { title: 'One Flew Over the Cuckoo’s Nest', imdb: 8.7 },
    { title: 'The Green Mile', imdb: 8.6 },
    { title: 'Gladiator', imdb: 8.5 },
    { title: 'Amadeus', imdb: 8.3 }
  ]
};

app.use(express.json());
app.use(express.static('public'));

app.get('/recommend', (req, res) => {
  const genre = req.query.genre;
  const genreMovies = movies[genre] || [];
  const movie = genreMovies[Math.floor(Math.random() * genreMovies.length)];
  res.json(movie);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
