import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieSearchService {
private movieUrl="https://api.themoviedb.org/3/search/movie?api_key=1a4c92c1e6d12e202327dea1fbeb4edd&";
            // api_key=1a4c92c1e6d12e202327dea1fbeb4edd&language=en-US&query=Batman&page=1&include_adult=false";
  constructor(private http:HttpClient) { }

  searchmovie(term:string):Observable<any[]>{
    if(!term.trim()){
      return of([]);
    }
    return this.http.get<any[]>(`${this.movieUrl}&query=${term}`);
  }

}
