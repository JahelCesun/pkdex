import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PokeapiService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getPokemons(limit = 20, offset = 0): Observable<any[]> {
    return this.http.get<any>(`${this.baseUrl}?limit=${limit}&offset=${offset}`).pipe(
      switchMap((res: any) => {
        const requests = res.results.map((p: any) => this.http.get<any>(p.url));
        return forkJoin(requests) as Observable<any[]>;
      })
    );
  }

  getPokemonById(id: string | number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }
}
