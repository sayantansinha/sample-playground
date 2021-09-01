export class TerritoryLanguageModel {

  territoryId: number;
  languageId: number;
  territoryDescription: string;
  languageDescription: string;
  territoryLanguageId: string;
  territoryLanguageDescription: string;

  constructor(territoryId: number, languageId: number, territoryDescription: string, languageDescription: string) {
    this.territoryId = territoryId;
    this.languageId = languageId;
    this.territoryDescription = territoryDescription;
    this.languageDescription = languageDescription;
    this.territoryLanguageId = territoryId + "-" + languageId;
    this.territoryLanguageDescription = territoryDescription + "/" + languageDescription;
  }

}
