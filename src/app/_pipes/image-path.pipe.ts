import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagePath',
})
export class ImagePathPipe implements PipeTransform {
  transform(value: string, imagesFolderName: string): string {
    const formattedName = value.toLowerCase().replace(/ /g, '_').replace('-', '');
    return `/assets/images/${imagesFolderName}/${formattedName}.png`;
  }
}
