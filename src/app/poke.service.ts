import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Poke } from './components/pokelist/pokelist.component';
import { ReplaySubject, from, map, mergeMap } from 'rxjs';

export let offset: number = 1;
export let limit: number = 30;
export let param: string | number = '';
const baseUrl = `https://pokeapi.co/api/v2/pokemon`;
const paginate = `?offset=${offset}&limit=${limit}`;

console.log(baseUrl + paginate);
@Injectable({
  providedIn: 'root',
})
export class PokeService {
  public pokes: Poke[] = [];
  constructor(public httpClient: HttpClient) {
    this.getPokes(offset, limit);
  }

  async getPokes(offset: number, limit: number) {
    const response = await this.httpClient
      .get<any>(baseUrl + paginate)
      .toPromise();
    let data: any = [];
    for (let i = offset; i < response.results.length + offset; i++) {
      data.push(await this.httpClient.get<any>(`${baseUrl}/${i}`).toPromise());
    }
    this.pokes = data;
  }
}
