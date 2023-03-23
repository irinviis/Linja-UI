import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IBus } from '../models/bus.model';

@Injectable({
  providedIn: 'root'
})
export class BusService {
  baseUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }


  getBusses() {
    return this.http.get<IBus[]>(this.baseUrl + 'Bus/GetBusses');
  }

  getBus(busId: number) {
    return this.http.get<IBus>(this.baseUrl + `Bus/GetBus?busId=${busId}`);
  }

  addBus(bus: IBus) {
    return this.http.post(this.baseUrl + 'Bus/AddBus', bus);
  }
}
