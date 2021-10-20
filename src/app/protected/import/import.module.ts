import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ImportComponent } from './import/import.component';
import { ImportUploadComponent } from './import-upload/import-upload.component';
import { ImportBannerComponent } from './import-banner/import-banner.component';


@NgModule({
  declarations: [ImportComponent, ImportUploadComponent, ImportBannerComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ImportModule { }
