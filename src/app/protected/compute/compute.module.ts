import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComputeComponent } from './compute/compute.component';
import { ComputeBannerComponent } from './compute-banner/compute-banner.component';
import { ComputeContractComponent } from './compute-contract/compute-contract.component';
import { ComputeScenarioComponent } from './compute-scenario/compute-scenario.component';
import { ComputeParameterComponent } from './compute-parameter/compute-parameter.component';


@NgModule({
  declarations: [ComputeComponent, ComputeBannerComponent, ComputeContractComponent, ComputeScenarioComponent, ComputeParameterComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ComputeModule { }
