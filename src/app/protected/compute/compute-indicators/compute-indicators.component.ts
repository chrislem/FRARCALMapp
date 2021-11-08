import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ComputeService } from 'src/app/services/compute.service';

@Component({
  selector: 'app-compute-indicators',
  templateUrl: './compute-indicators.component.html',
  styleUrls: ['./compute-indicators.component.scss']
})
export class ComputeIndicatorsComponent implements OnInit {

  selected: any;
  selectedList: any = [];
  @ViewChild("facts") facts: any = [];
  typesOfFacts: any[] = [
    'Outstanding Principal',
    'Average Outstanding Principal',
    'O.P. known rate',
    'Principal Payment',
    'Interest Payment',
    'Interest and Principal Payment',
    'Accrued Interest',
    'Interest Margin',
    'NPV',
    'Income'
  ];
  factsSet = new Map();
  filteredOptions: any[] = [];

  factsList: Array<Array<{ name: string, completed: boolean }>>; // Observable<Array<{name : string, completed: boolean}>>; //= ["test", "tests", "tests", "tests", "tests", "tests", "tests", "tests", "tests", "tests", "tests", "tests"];

  constructor(private computeService: ComputeService) {

  }

  ngOnInit(): void {
    let factlist = [];
    this.computeService.getFacts().forEach(item => {
      item.forEach(fact => {
        console.log("lsut:" + fact.name)
        factlist.push(fact)
        this.typesOfFacts.push(fact.name)
      })
    })

    console.log("typesOfFacts count:" + factlist.length)

    this.typesOfFacts.forEach(item => {
      console.log("typesOfFacts:" + item)
      this.factsSet.set(item, false);
    });

    this.filteredOptions = [...this.typesOfFacts];
  }

  selectionChange($event: any) {
    this.factsSet.set(
      $event.option.value,
      !this.factsSet.get($event.option.value)
    );

    this.computeService.publishFacts(this.selected);
  }



}
