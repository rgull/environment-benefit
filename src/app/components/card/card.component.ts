import { Component, Input } from '@angular/core';
import { forest } from 'src/app/models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() cardData: forest;

  constructor() { }

  /**
   * Get image path.
   * @param {string} name Name of image
   */
  getImage(name: string) {
    return 'assets/images/' + name + '.jpg';
  }
}
