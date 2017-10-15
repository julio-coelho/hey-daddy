import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menus: Set<String>;

  constructor() {
    this.menus = new Set<String>();
    this.menus.add('Propostas');
    this.menus.add('Cadastros');
    this.menus.add('Relatórios');
  }
}
