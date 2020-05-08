import { Injectable } from '@angular/core';
import { Item } from './Item';
import { HttpClient } from '@angular/common/http';
import { ItemResponse } from './ItemResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) { }

  getItems(searchtext: String): Observable<ItemResponse> {

    return this.http.get<ItemResponse>('http://localhost:8080/api/items'); 
    
  }
}
