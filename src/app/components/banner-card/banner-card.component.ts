import { Component, Input } from '@angular/core';
import { banner } from 'src/app/models';

@Component({
  selector: 'app-banner-card',
  templateUrl: './banner-card.component.html',
  styleUrls: ['./banner-card.component.scss']
})
export class BannerCardComponent {
  @Input() bannerData: banner;

  constructor() { }

  /**
   * Get image path.
   * @param {string} name Name of image
   */
  getImage(name: string) {
    return 'assets/images/' + name + '.png';
  }
}
