import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { Item, Id } from "../video.model";

@Component({
  selector: "search-list",
  templateUrl: "./search-list.component.html",
  styleUrls: ["./search-list.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchListComponent {
  @Input() videoList: Item[];
  activeVideo: string = "";

  constructor() {}

  trackByFn(index, { id: { videoId } }) {
    return videoId;
  }

  openVideo(obj: Id) {
    this.activeVideo = obj.videoId || obj.playlistId || obj.channelId;
  }

  closeVideo({ target: { classList } }) {
    classList.contains("overlay") ? (this.activeVideo = "") : void 0;
  }

  getImage(videoId: string, playlistId: string, channelId: string) {
    const id = videoId || playlistId || channelId;
    const IMAGE_URL = `https://img.youtube.com/vi/${id}/sddefault.jpg`;
    return IMAGE_URL;
  }
}
