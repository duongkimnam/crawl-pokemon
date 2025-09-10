import { connectDB } from './config/database.js';
import { crawlTop200Pokemons } from './services/crawl.js';

const start = async () => {
  await connectDB();
  await crawlTop200Pokemons();
  process.exit(0);
};

start();
