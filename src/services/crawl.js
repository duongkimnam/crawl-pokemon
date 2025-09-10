import axios from 'axios';
import dotenv from 'dotenv';
import Pokemon from '../models/Pokemon.js';
import PokemonDetail from '../models/PokemonDetail.js';

dotenv.config();

const BASE_URL = process.env.BASE_URL;

export const crawlTop200Pokemons = async () => {
  const tournamentDate = '2025-07';
  const tournamentName = 'gen9vgc2025regi-1760';
  try {
    const res = await axios.get(`${BASE_URL}/l/${tournamentDate}/${tournamentName}`);
    const pokemonList = res.data.slice(0, 200); 

    for (const [index, pkm] of pokemonList.entries()) {
      const {name, rank, search, raw, percent, types, ss, id, l} = pkm;

      // Save basic info
      await Pokemon.updateOne(
        { name },
        { name, rank, search, raw, percent, types, ss, id, l },
        { upsert: true }
      );

      // Get detail
      try {
        const detailRes = await axios.get(
          `${BASE_URL}/p/${tournamentDate}/${tournamentName}/${encodeURIComponent(name)}`
        );

        const detail = detailRes.data;

        await PokemonDetail.updateOne(
          { name },
          detail,
          { upsert: true }
        );

        console.log(`✅ [${index + 1}] Saved: ${name}`);
      } catch (err) {
        console.error(`❌ Failed to fetch detail for ${name}:`, err.message);
      }
    }

    console.log('🎉 Completed crawling top 200 Pokémon!');
  } catch (err) {
    console.error('❌ Failed to fetch top Pokémon list:', err.message);
  }
};
