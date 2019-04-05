import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "shorter"
})
export class ShorterPipe implements PipeTransform {
  transform(value: string, args?: any): string {
    return value.length > 50 ? `${value.slice(0, 50)}...` : value;
  }
}
