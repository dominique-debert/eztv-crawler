import { getShow, search, getShows, getLatestShows, getTorrents, getTorrentsByImdbId } from './dist/main.js'
import express from 'express';

const app = express();
let shows = [];
let routes = [];

app.set ('view engine', 'ejs');
app.set ('views', './views');
app.use(express.static('public'));

app.get('/', async (req, res) => {
  shows = await getShows();
  
  if (shows) {
    for (var i = 0; i < shows.length; ++i) {
        routes.push({"Key": i + 1 , url : shows[i].url});
    }
  }
  
  res.locals.shows = shows;
  res.render('home');
});

app.get('/latest', async (req, res) => {
  shows = await getLatestShows();
  
  if (shows) {
    for (var i = 0; i < shows.length; ++i) {
        routes.push({"Key": i + 1 , url : shows[i].url});
    }
  }
  
  res.locals.shows = shows;
  res.render('latest');
});

app.get(routes, (req, res) => {
  const show = shows.find((show) => show.url === req.url)
  console.log(show);
  res.locals.show = show;
  res.render('episode-detail');
})


app.listen(3000);