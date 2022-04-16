import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() listStatus: any;
  @Input() listInfo: any;
  @Input() public visibility: boolean = true;
  
  constructor() { }

  ngOnInit(): void {
    
  }

  closeDialog() {
    this.visibility = false;
  }
}
