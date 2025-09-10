# Pokemon Data Crawler

## Installation

1. **Clone the repository:**
   ```bash
   git clone git@github.com:duongkimnam/crawl-pokemon.git
   cd crawl-data-pokemon
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment setup:**
   Create a `.env` file in the root directory:
   ```env
   MONGO_URI=mongodb://localhost:27018/pokemon
   BASE_URL=https://www.pikalytics.com/api
   ```

## Usage

```bash
npm run dev
```


## How It Works

1. **Connect to Database**: Establishes MongoDB connection
2. **Fetch Pokemon List**: Retrieves top 200 Pokémon from the API
3. **Store Basic Data**: Saves basic info to Pokemon collection
4. **Fetch Details**: For each Pokémon, fetches detailed statistics
5. **Process Data**: Handles data parsing and validation
6. **Store Details**: Saves comprehensive data to PokemonDetail collection


