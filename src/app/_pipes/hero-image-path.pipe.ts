import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heroImagePath',
})
export class HeroImagePathPipe implements PipeTransform {
  transform(value: string): string {
    return `/assets/images/heroes/${value.toLowerCase().replace(' ', '_')}.png`;
  }
}
