import { getShow, search, getShows, getTorrents, getTorrentsByImdbId } from './dist/main.js'

const shows = await getShows();

console.clear();
// console.log(shows);
// const currentShow = await getShow(firstShow.id);
// console.log(currentShow.id);
// console.log(shows.length);

console.log('end');