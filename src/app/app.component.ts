import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users = [
    {name: 'WFM1', desc: 'desc1'},
    {name: 'WFM2', desc: 'desc2'},
    {name: 'WFM3', desc: 'desc3'},
    {name: 'WFM4', desc: 'desc4'},
    {name: 'WFM5', desc: 'desc5'},
    {name: 'WFM6', desc: 'desc6'}
  ];
}
