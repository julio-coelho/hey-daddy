import { Injectable } from '@angular/core';
import { Menu } from '../menu/menu';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class MenuService {

  menus: Array<Menu>;

  constructor() { }

  getMenu(): Observable<Array<Menu>> {

    if (this.menus) {
      return Observable.of(this.menus);

    } else {

      return Observable.create((observer) => {

        this.menus = new Array<Menu>();

        // Contract
        const contract = new Menu();
        contract.label = 'Proposta';
        contract.submenu = new Array<Menu>();

        const newContract = new Menu();
        newContract.label = 'Nova';
        newContract.link = '/contract';
        newContract.icon = 'note_add';
        contract.submenu.push(newContract);

        const editContract = new Menu();
        editContract.label = 'Consulta';
        editContract.link = '';
        editContract.icon = 'find_in_page';
        contract.submenu.push(editContract);

        this.menus.push(contract);

        // Register
        const register = new Menu();
        register.label = 'Cadastro';
        register.submenu = new Array<Menu>();

        const customer = new Menu();
        customer.label = 'Cliente';
        customer.link = '';
        customer.icon = 'people';
        register.submenu.push(customer);

        const vehicle = new Menu();
        vehicle.label = 'Veículo';
        vehicle.link = '';
        vehicle.icon = 'directions_car';
        register.submenu.push(vehicle);

        const company = new Menu();
        company.label = 'Seguradora';
        company.link = '';
        company.icon = 'account_balance';
        register.submenu.push(company);

        this.menus.push(register);

        // Report
        const report = new Menu();
        report.label = 'Relatório';
        report.submenu = new Array<Menu>();

        const expiring = new Menu();
        expiring.label = 'Renovação';
        expiring.link = '';
        expiring.icon = 'restore_page';
        report.submenu.push(expiring);

        const performance = new Menu();
        performance.label = 'Produção';
        performance.link = '';
        performance.icon = 'track_changes';
        report.submenu.push(performance);

        this.menus.push(report);

        observer.next(this.menus);
        observer.complete();

      });
    }
  }
}
