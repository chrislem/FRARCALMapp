import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ComputeService } from 'src/app/services/compute.service';
import {  MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-compute-contract',
  templateUrl: './compute-contract.component.html',
  styleUrls: ['./compute-contract.component.scss']
})
export class ComputeContractComponent implements OnInit {

  selectedContract: string;
  contracts?: Observable<any>;

  constructor(private computeService: ComputeService) { }

  ngOnInit(): void {
    this.contracts = this.computeService.getPortfolios();
  }

  radioChange($event: MatRadioChange) {
    
    this.computeService.publishPortfolio($event.value);
}

}
