import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ForestService {
    
    constructor(private http: HttpClient) {}

    /**
     * Gets forest data
     * @returns {Observable<any>}
     */
    getForestData():Observable<any> {
        let url = 'assets/static/forest.json';
        return this.http.get(url);
    }
}