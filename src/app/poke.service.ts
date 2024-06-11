import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Poke } from './components/pokelist/pokelist.component';
import { lastValueFrom } from 'rxjs';

export let offset: number = 1;
export let limit: number = 30;
export let param: string | number = '';
const baseUrl = `https://pokeapi.co/api/v2/pokemon`;
const paginate = `?offset=${offset}&limit=${limit}`;

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  public pokes: Poke[] = [];
  constructor(public httpClient: HttpClient) {
    this.getPokes(offset, limit);
  }

  public async fetchPokeApi(url: string): Promise<any> {
    const httpCall = this.httpClient.get<any>(url);
    let response = await lastValueFrom(httpCall);
    return response;
  }

  public async getPokes(offset: number, limit: number) {
    const response = await this.fetchPokeApi(baseUrl + paginate);
    let data: any = [];
    for (let i = offset; i < response.results.length + offset; i++) {
      data.push(await this.httpClient.get<any>(`${baseUrl}/${i}`).toPromise());
    }
    this.pokes = data;
  }
}
