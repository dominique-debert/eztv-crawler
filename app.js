import { getShow, search, getShows, getLatestShows, getTorrents, getTorrentsByImdbId } from './dist/main.js'
import express from 'express';

const app = express();


app.set ('view engine', 'ejs');
app.set ('views', './views');
app.use(express.static('public'));

app.get('/', async (req, res) => {
  console.log('begin getShows()');
  const shows = await getShows();
  res.locals.shows = shows;
  res.render('home');
  console.log('end getShows()');
});

app.get('/latest', async (req, res) => {
  const latestShows = await getLatestShows();
  console.log('begin getLatestShows()');
  res.locals.latestShows = latestShows;
  res.render('latest');
  console.log('end getLatestShows()');
});


app.listen(3000);