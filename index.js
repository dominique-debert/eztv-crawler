import { getShow, search, getShows, getTorrents, getTorrentsByImdbId } from './dist/main.js'

const shows = await getShows();

console.clear();
console.log(shows);