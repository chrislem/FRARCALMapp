import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComputeComponent } from './compute/compute.component';
import { ComputeBannerComponent } from './compute-banner/compute-banner.component';
import { ComputeContractComponent } from './compute-contract/compute-contract.component';
import { ComputeScenarioComponent } from './compute-scenario/compute-scenario.component';
import { ComputeParameterComponent } from './compute-parameter/compute-parameter.component';
import { ComputationComponent } from './computation/computation.component';
import { ComputeIndicatorsComponent } from './compute-indicators/compute-indicators.component';


@NgModule({
  declarations: [ComputeComponent, ComputeBannerComponent, ComputeContractComponent, ComputeScenarioComponent, ComputeParameterComponent, ComputationComponent, ComputeIndicatorsComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ComputeModule { }
