import { Component, OnInit } from "@angular/core";

import { Subject } from "rxjs";
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap,
  filter
} from "rxjs/operators";

import { VideoSearchService } from "./video-search.service";
import { NgxSpinnerService } from "ngx-spinner";

import { Item } from "./video.model";

@Component({
  selector: "search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"]
})
export class SearchBarComponent implements OnInit {
  inputChange = new Subject();
  showList: boolean = false;
  videoList: Item[] = [];

  constructor(
    public videoService: VideoSearchService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.inputChange
      .pipe(
        debounceTime(700),
        distinctUntilChanged(),
        tap(() => (this.showList = false)),
        filter(query => query !== ""),
        tap(() => {
          this.showList = false;
          this.spinner.show();
        }),
        switchMap(query => this.videoService.searchVideos(query)),
        tap(({ items }) => {
          this.spinner.hide();
          this.showList = true;
          this.videoList = items;
        })
      )
      .subscribe(data => console.log("data", data));
  }

  onChange(query: string) {
    this.inputChange.next(query);
  }
}
