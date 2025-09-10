import mongoose from 'mongoose';

const PokemonDetailSchema = new mongoose.Schema({
  name: String,
  types: [String],
  stats: {
    hp: Number,
    atk: Number,
    def: Number,
    spa: Number,
    spd: Number,
    spe: Number,
  },
  ss: Boolean,
  abilities: [{
    ability: String,
    percent: Number,
  }],
  raw_count: Number,
  percent: Number,
  ranking: String,
  viability: String,
  items: [{
    item: String,
    item_us: String,
    percent: Number,
  }],
  spreads: [{
    nature: String,
    ev: String,
    percent: Number,
  }],
  moves: [{
    move: String,
    percent: Number,
    type: { type: String, required: false },
  }],
  team: [{
    pokemon: String,
    percent: Number,
    types: [String],
    ss: Boolean,
    id: Number,
    pokemon_trans: String,
    l: String,
  }],
  name_trans: String,
  l: String,
  id: Number,
});

export default mongoose.model('PokemonDetail', PokemonDetailSchema);