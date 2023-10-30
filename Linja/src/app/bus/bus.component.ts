import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { BsLocaleService, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BusService } from 'src/app/services/bus.service';
import { IBus } from 'src/app/models/bus.model';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {
  busses: IBus[] = [];
  newBus: IBus = <IBus>{};
  modalRef?: BsModalRef;
  bsConfig!: Partial<BsDatepickerConfig>;

  constructor(
    private busService: BusService,
    private modalService: BsModalService,
    private localeService: BsLocaleService
  ) {
    this.bsConfig = {
      dateInputFormat: 'DD MMMM YYYY'};
    this.localeService.use('fi');
   }

  ngOnInit(): void {
    this.getBusses()
  }

  getBusses() {
      this.busService.getBusses().subscribe(busses => {
        this.busses = busses;
      })
  }

  addBus() {
    this.busService.addBus(this.newBus).subscribe(() => {
        this.modalService.hide();
        this.getBusses();
    })
  }

  openModalAddBus(addBusTemplate: TemplateRef<any>) {
    this.modalRef = this.modalService.show(addBusTemplate);
  }

  updateBus(busToUpdate: IBus) {
    this.busService.updateBus(busToUpdate).subscribe(() => {
      this.modalService.hide();
      this.getBusses();
    })
  }

  openModalUpdateBus(updateBusTemplate: TemplateRef<any>) {
    this.modalRef = this.modalService.show(updateBusTemplate);
  }

  removeBus(busToRemove: IBus) {
    this.busService.removeBus(busToRemove).subscribe(() => {
      this.modalService.hide();
      this.getBusses();
    })
  }

  openModalRemoveBus(removeBusTemplate: TemplateRef<any>) {
    this.modalRef = this.modalService.show(removeBusTemplate);
  }

}
