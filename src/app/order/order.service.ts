import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PortraitKind } from './portrait-kind';
import { PortraitSize } from './portrait-size';

import { Observable } from 'rxjs/Observable';
import { map} from 'rxjs/operators';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) { }

  public queryPortraitKinds(): Observable<PortraitKind[]> {
    return this.http.get('/portrait-kind', {
      headers: { accept: 'application/json' } 
    }).pipe(map(data=> { 
      var result = data as Array<PortraitKind>;

      result.forEach(f=>{
        f.price = f.price ? Number.parseFloat(f.price.toString()): 0.0;
      });

      return result;
    }));
  }

  public queryPortraitSizes(): Observable<PortraitSize[]> {
    return this.http.get('/portrait-size', {
      headers: { accept: 'application/json' } 
    }).pipe(map(data=> {
      var result = data as Array<PortraitSize>;

      result.forEach(f=>{
        f.price = f.price ? Number.parseFloat(f.price.toString()): 0.0;
      });

      return result;
    }));
  }
}
