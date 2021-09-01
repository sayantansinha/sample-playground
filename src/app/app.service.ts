import {Injectable} from '@angular/core';
import {TerritoryLanguageModel} from "./territory-language.model";
import {AppData} from "./app.data";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() {
  }

  fetchData(searchValue: string): Promise<TerritoryLanguageModel[]> {
    let territoryLanguageResponseMap: Map<string, any> = new Map(Object.entries(AppData.RAW_DATA));
    let userFilteredTerritoryLanguages: any[] = [...territoryLanguageResponseMap.values()]
      .filter((obj: any) => obj.territoryDescription.toLowerCase().includes(searchValue.toLowerCase()));
    let response: TerritoryLanguageModel[] = userFilteredTerritoryLanguages
      .map((obj: any) => new TerritoryLanguageModel(obj.territoryId, obj.languageId, obj.territoryDescription, obj.languageDescription));
    return new Promise<TerritoryLanguageModel[]>(resolve => resolve(response)).then(resp => resp);
  }

}
