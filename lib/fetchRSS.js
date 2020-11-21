import Parser from 'rss-parser';
import { blogUrls } from './constants';

export default async function fetchRSS() {
  let rssList = [];

  for (const url of blogUrls) {
    const parser = new Parser();

    const response = await fetch(url);
    const text = await response.text();
    const rss = await parser.parseString(text);

    rssList = [...rssList, ...rss.items];
  }

  return rssList;
}
