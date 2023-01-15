import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heroImagePath',
})
export class HeroImagePathPipe implements PipeTransform {
  transform(value: string): string {
    const formattedName = value.toLowerCase().replace(/ /g, '_').replace('-', '');
    return `/assets/images/heroes/${formattedName}.png`;
  }
}
