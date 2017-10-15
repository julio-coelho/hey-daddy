import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';
import { MenuService } from '../providers/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [MenuService]
})
export class MenuComponent implements OnInit {

  menus = new Array<Menu>();

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.getMenu().subscribe((menu) => {
      this.menus = menu;
    });
  }
}
