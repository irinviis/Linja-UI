import { Component, OnInit, TemplateRef } from '@angular/core';
import { IBus } from '../models/bus.model';
import { BusService } from '../services/bus.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
