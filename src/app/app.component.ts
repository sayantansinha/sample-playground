import { Component } from '@angular/core';
import CustomStore from "devextreme/data/custom_store";
import DataSource from "devextreme/data/data_source";
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  territoryLanguageDataSource: any;
  licenseGroupTerritoryLanguageIds: number[];

  constructor(private appService: AppService) {
    this.licenseGroupTerritoryLanguageIds = [];

    this.territoryLanguageDataSource = new DataSource({
      store: new CustomStore({
        key: "territoryLanguageId",
        load: loadOptions => {
          let response: Promise<any>;
          if (loadOptions.searchValue) {
            response = appService.fetchData(loadOptions.searchValue);
          } else {
            response = new Promise(resolve => resolve([])).then(response => response)
          }
          return response;
        }
      })
    });
  }
}
