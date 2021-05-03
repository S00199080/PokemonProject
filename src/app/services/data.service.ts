import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = `https://pokeapi.co/api/v2/pokemon/`;

  constructor(
    private http:HttpClient
  ) { }

getPokemons(){
  return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=809`);

}

getExtraData(name:string){
  return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
}

getSearchPokemon(searchTerm:string)
{
  return this.http.get(this.apiUrl+`${searchTerm}`)
}

}
