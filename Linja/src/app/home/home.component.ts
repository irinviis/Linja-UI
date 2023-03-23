import { Component, OnInit } from '@angular/core';
import { IBus } from '../models/bus.model';
import { BusService } from '../services/bus.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  busses: IBus[] = [];

  constructor(
    private busService: BusService
  ) { }

  ngOnInit(): void {
    this.getBusses()
  }

  getBusses() {
      this.busService.getBusses().subscribe(busses => {
        this.busses = busses;
      })
  }

}
