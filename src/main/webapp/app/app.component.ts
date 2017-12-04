import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  collapsed = false;
  toggledClass = "nav-md";

  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }

  getToggledClass() {
    return this.collapsed ? 'nav-sm' : 'nav-md';
  }
}
