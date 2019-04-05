import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import { Observable } from "rxjs";

import { VideoModel } from "./video.model";

import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class VideoSearchService {
  constructor(private http: HttpClient) {}

  public searchVideos(q: any): Observable<VideoModel> {
    const params = new HttpParams()
      .set("key", environment.API_KEY)
      .set("maxResults", "3")
      .set("part", "id,snippet")
      .set("q", q);
    return this.http.get<VideoModel>(environment.API_URL, { params });
  }
}
