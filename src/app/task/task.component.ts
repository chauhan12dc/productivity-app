import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
// export class TaskComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


//Adding the newly imported task.ts interface to its components.
export class TaskComponent {
  @Input() task: Task | null = null;
  @Output() edit = new EventEmitter<Task>();
}