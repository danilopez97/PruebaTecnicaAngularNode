import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  constructor() { }

  private urlBase = environment.urlBase;

  getUrlBase() {
      return this.urlBase;
  }


}
