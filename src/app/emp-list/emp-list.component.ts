import { Component, OnInit, Input, SimpleChanges, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.scss']
})
export class EmpListComponent implements OnInit {

  @Input() data: any[];

  @Output() deleteEvent: EventEmitter<number> = new EventEmitter();

  // public data: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //   //Add '${implements OnChanges}' to the class.
  //   console.log(changes);
  //   console.log(this.data)
  // }

  deleteEmp(index){
    this.deleteEvent.emit(index);
  }

}
