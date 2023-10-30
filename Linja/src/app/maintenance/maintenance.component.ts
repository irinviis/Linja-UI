import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsLocaleService, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { IBus } from '../models/bus.model';
import { IMaintenance } from '../models/maintenance.model';
import { BusService } from '../services/bus.service';
import { MaintenanceService } from '../services/maintenance.service';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {
  maintenances: IMaintenance[] = [];
  newMaintenance: IMaintenance = <IMaintenance>{};
  modalRef?: BsModalRef;
  bsConfig!: Partial<BsDatepickerConfig>;
  busses: IBus[] = [];

  constructor(
    private maintenanceService: MaintenanceService,
    private busService: BusService,
    private modalService: BsModalService,
    private localeService: BsLocaleService
  ) { 
    this.bsConfig = {
      dateInputFormat: 'DD MMMM YYYY'};
    this.localeService.use('fi');
  }

  ngOnInit(): void {
    this.getMaitenances();
    this.getBusses();
  }

  getMaitenances() {
    this.maintenanceService.getMaintenances().subscribe(maintenances => {
      this.maintenances = maintenances;
    })
  }

  getBusses() {
    this.busService.getBusses().subscribe(busses => {
      this.busses = busses;
    })
  }

  addMaintenance() {
    this.maintenanceService.addMaintenance(this.newMaintenance).subscribe(() => {
      this.modalService.hide();
      this.getMaitenances();
    })
  }

  openModalAddMaintenance(addMaintenanceTemplate: TemplateRef<any>) {
    this.modalRef = this.modalService.show(addMaintenanceTemplate);
  }

}
