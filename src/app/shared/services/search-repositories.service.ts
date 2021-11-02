import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IRepository } from '../../interfaces/repository-interface';
import { IExtendedRepository } from '../../interfaces/extended-repository-interface';
import { IResponse } from '../../interfaces/response-interface';
import { map, pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchRepositoriesService {

  private readonly URL = environment.apiGitHubUrl;

  constructor(private http: HttpClient) { }

  public getAllRepositories(name: string): Observable<IRepository[]> {
    const params = {
      q: name
    };
    return this.http.get<IResponse<IRepository>>(this.URL, { params })
      .pipe(map((res) => res.items));
  }

  public getRepository(name: string): Observable<IExtendedRepository> {
    const params = {
      q: name,
      per_page: 1
    }
    return this.http.get<IResponse<IExtendedRepository>>(this.URL,  { params } ).pipe(
      pluck('items'),
      map(([repo]) => repo)
    );
  }
}
