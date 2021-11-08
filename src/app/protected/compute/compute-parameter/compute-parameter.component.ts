import { Component, ElementRef, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { ComputeService } from 'src/app/services/compute.service';
import { DateAdapter } from '@angular/material/core';



@Component({
  selector: 'app-compute-parameter',
  templateUrl: './compute-parameter.component.html',
  styleUrls: ['./compute-parameter.component.scss']
})
export class ComputeParameterComponent implements OnInit {

  selectedDate: Date;

  constructor(private computeService: ComputeService, private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
    this.selectedDate = new Date();
   }

  ngOnInit(): void {
    this.computeService.publishSID(this.selectedDate);
  }

  maturityChange(event) {
    this.computeService.publishMaturity(event.target.value)
  }

  stepChange(event) {
    this.computeService.publishStep(event.target.value)
}

sidChange(event) {
  console.log("sid change")
  this.computeService.publishSID(event.target.value)
}

}
