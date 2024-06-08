import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Poke } from './components/pokelist/pokelist.component';
import { ReplaySubject, from, map, mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  public pokes: Poke[] = [];
  constructor(public httpClient: HttpClient) {
    let offset: number = 0;
    let limit: number = 30;
    const pokeapiUrl = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    this.httpClient
      .get<any>(pokeapiUrl)
      .pipe(
        map((values) => values.results),
        map((value: any) => {
          return from(value).pipe(
            mergeMap((v: any) => this.httpClient.get(v.url))
          );
        }),
        mergeMap((value) => value)
      )
      .subscribe((result: any) => {
        const poke: Poke = {
          id: result.id,
          name: result.name,
          img: result.sprites.other.dream_world.front_default,
          types: result.types.map((v: any) => v.type.name),
        };

        this.pokes[result.id] = poke;
      });
  }
}
