import mongoose from 'mongoose';

const PokemonSchema = new mongoose.Schema({
  name: String,
  rank: Number,
  search: String,
  raw: Number,
  percent: Number,
  types: [String],
  ss: Boolean,
  id: Number,
  l: String,
});

export default mongoose.model('Pokemon', PokemonSchema);