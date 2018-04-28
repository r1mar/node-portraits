import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PortraitKind } from './portrait-kind';

import { Observable } from 'rxjs/Observable';
import { map} from 'rxjs/operators';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) { }

  public queryPortraitKinds(): Observable<PortraitKind[]> {
    return this.http.get('/portrait-kind', {
      headers: { accept: 'application/json' } 
    }).pipe(map(data=> data as Array<PortraitKind>));
  }

}
