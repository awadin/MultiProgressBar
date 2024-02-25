import { Component, Input, OnInit } from '@angular/core';

interface ProgressBarInterface {
  percentage: number;
  displayNumber: number;
  valueColorAssignment: string;
}

interface ProgressBarLegendInterface {
  legendValue: string;
  valueColorAssignment: string;
}

@Component({
  selector: 'ngx-multi-progress-bar',
  templateUrl: './ngx-multi-progress-bar.component.html',
  styleUrls: ['./ngx-multi-progress-bar.component.scss'],
})
export class NgxMultiProgressBarComponent implements OnInit {
  @Input() progressBarData: ProgressBarInterface[];
  @Input() progressBarLegend: ProgressBarLegendInterface[];
  @Input() bannerProgressBar: boolean = false;

  public totalValue: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.progressBarData.forEach((element) => {
      this.totalValue += element.displayNumber;
    });
  }

  renderBarSections(index: number): string {
    switch (index) {
      case 0:
        return 'bar-start';
      case this.progressBarData.length - 1:
        return 'bar-end';
      default:
        return 'bar-middle';
    }
  }

}
