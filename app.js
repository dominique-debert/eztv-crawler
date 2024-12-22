import { getShow, search, getShows, getTorrents, getTorrentsByImdbId } from './dist/main.js'
import express from 'express';

const app = express();

const shows = await getShows();

app.set ('view engine', 'ejs');
app.set ('views', './views');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.locals.shows = shows;
  res.render('index');
});

console.log('end');

app.listen(3000);