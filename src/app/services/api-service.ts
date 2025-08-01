import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


export interface Pokemon {
  id: number,
  name: string,
  weight: number,
  height: number,
  types: { type: { name: string } }[];
  sprites: { front_default: string };
  moves: { move: { name: string } }[];
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = "https://pokeapi.co/api/v2/pokemon"

  constructor(private http: HttpClient) {}

  getPokemonById(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.baseUrl}/${id}`);
  }
}
