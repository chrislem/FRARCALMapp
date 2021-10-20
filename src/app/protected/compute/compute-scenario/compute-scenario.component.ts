import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ComputeService } from 'src/app/services/compute.service';
import {  MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-compute-scenario',
  templateUrl: './compute-scenario.component.html',
  styleUrls: ['./compute-scenario.component.scss']
})
export class ComputeScenarioComponent implements OnInit {

  selectedScenario: string;
  scenarios?: Observable<any>;

  constructor(private computeService: ComputeService) { }

  ngOnInit(): void {
    this.scenarios = this.computeService.getScenarios();
  }

  radioChange($event: MatRadioChange) {
    
    this.computeService.publishScenario($event.value);
  }
}
