import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  public tab = 'cim';

  constructor(
  ) { }

  ngOnInit() {
  }

  public segmentChanged(tab: any) {
    this.tab = tab.detail.value;
  }

}
