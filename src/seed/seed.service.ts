import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interfac';
import { PokemonService } from './../pokemon/pokemon.service';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  constructor(
    private readonly pokemonService: PokemonService,
    private readonly http: AxiosAdapter,
  ) {}

  async executeSeed() {
    await this.pokemonService.deleteAll();
    const data = await this.http.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=300',
    );
    const pokemons = [];
    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no: number = +segments[segments.length - 2];

      pokemons.push({ name, no });
    });

    await this.pokemonService.createMany(pokemons);
    return 'Seed executed';
  }
}
