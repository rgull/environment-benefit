import { Component, OnInit } from '@angular/core';
import { ForestService } from './services';
import { banner, forest } from 'src/app/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  bannerData: banner;
  forests: forest[];

  constructor(private forestService: ForestService) { }

  ngOnInit() {
    this.getForestData();
  }

  /**
   * Get forest data
   */
  getForestData() {
    this.forests = [];
    this.forestService.getForestData().subscribe((res: any) => {
      this.bannerData = res.banner;
      this.forests = res.forests;
    });
  }
}
