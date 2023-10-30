import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IMaintenance } from '../models/maintenance.model';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {
  baseUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getMaintenances() {
    return this.http.get<IMaintenance[]>(this.baseUrl + 'Maintenance/GetMaintenances');
  }

  addMaintenance(maintenance: IMaintenance) {
    return this.http.post(this.baseUrl + 'Maintenance/AddMaintenance', maintenance);
  }
}
