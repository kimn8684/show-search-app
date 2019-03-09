import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IShowDetails } from './ishow-details';
import { map } from 'rxjs/operators'

interface IShowDetailsData {
  name: string,
  schedule: {
    time: string,
    days: string[]
  },
  genres: string[],
  network: {name: string},
  image: {original: string},
  summary: string
}


@Injectable({
  providedIn: 'root'
})

export class ShowService {

  constructor(private httpClient: HttpClient) { }

  getCurrentShow(name: string){
    return this.httpClient.get<IShowDetailsData>(`${environment.baseUrl}api.tvmaze.com/singlesearch/shows?q=${name}`).pipe(
      map(data => this.transformToIShowDetails(data)))
  }

  private transformToIShowDetails(data: IShowDetailsData): IShowDetails {
    return {
      time: data.schedule.time,
      schedule: data.schedule.days,
      name: data.name,
      genres: data.genres,
      network: data.network.name,
      image: data.image.original,
      summary: data.summary
    };
  };
}