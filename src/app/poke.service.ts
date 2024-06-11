import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPoke } from './components/pokelist/pokelist.component';
import { lastValueFrom } from 'rxjs';

export let offset: number = 0;
export let limit: number = 32;
export let param: string | number = '';
const baseUrl = `https://pokeapi.co/api/v2/pokemon`;
const paginate = `?offset=${offset}&limit=${limit}`;

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  public pokes: IPoke[] = [];
  constructor(public httpClient: HttpClient) {
    this.getPokes(offset);
  }

  async fetchPokeApi(url: string): Promise<any> {
    const httpCall = this.httpClient.get<any>(url);
    let response = await lastValueFrom(httpCall);
    return response;
  }

  async getPokes(offset: number) {
    let data: any = [];
    const response = await this.fetchPokeApi(baseUrl + paginate);
    offset == 0 && (offset = 1);
    for (let i = offset; i < response.results.length + offset; i++) {
      data.push(await this.fetchPokeApi(`${baseUrl}/${i}`));
    }
    this.pokes = data;
  }

  returnTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  prevPage() {
    if (offset === 0) return;
    offset = offset - limit;
    this.getPokes(offset);
    this.returnTop();
  }

  nextPage() {
    if (offset == 1024) return;
    offset = offset + limit;
    this.getPokes(offset + 1);
    this.returnTop();
  }
}
