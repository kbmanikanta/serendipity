// import { Inject, Injectable } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { UtilsConfig } from '../../models/models';
// import { UtilsConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private uriPrefix = 'assets/data/nav-list/';
  private uriSuffix = '.json';

  constructor(private httpClient: HttpClient) {}

  public getNavListMetadata(menuId: string): Promise<any> {
    return this.httpClient.get<any>(this.uriPrefix + menuId + this.uriSuffix).toPromise();
  }

}

/*

  constructor(@Inject(UtilsConfigService) private config: UtilsConfig,
              private httpClient: HttpClient) {

    // this.uriPrefix = this.uriPrefix + this.config.defaultLanguage.split('-')[0] + '/';
  }

*/