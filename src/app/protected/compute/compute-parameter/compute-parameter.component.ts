import { Component, ElementRef, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { ComputeService } from 'src/app/services/compute.service';


@Component({
  selector: 'app-compute-parameter',
  templateUrl: './compute-parameter.component.html',
  styleUrls: ['./compute-parameter.component.scss']
})
export class ComputeParameterComponent implements OnInit {

  computationData: any = {};
  @ViewChild('notification') notification: ElementRef;
  computationProgress = false;

  constructor(private computeService: ComputeService, private renderer: Renderer2) { 
    computeService.event.subscribe((data) => {
      this.computationData = data;
      if(this.computationData.portfolio != "")
        this.computationProgress = true;
    });

  }

  ngOnInit(): void {
  }

  startComputation(){
    this.computationProgress = false;

    this.computeService.initCommunication();

    this.computeService.listenComputationNotification('notification').subscribe((data) => {
      const p: HTMLParagraphElement = this.renderer.createElement('p');
      p.innerHTML = data;
      this.renderer.appendChild(this.notification.nativeElement, p)
      console.log(data);
      
    })
    //start the computation from rest call
    this.computeService.startComputation();
    //listen on socket
    
  }
}
