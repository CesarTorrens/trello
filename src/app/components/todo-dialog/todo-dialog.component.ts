import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { BtnComponent } from '../btn/btn.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose, faCheckToSlot, faBars, faUser, faTag, faCheckSquare, faClock } from '@fortawesome/free-solid-svg-icons';
import { ToDo } from '../../models/todo.model';

interface InputData {
  todo: ToDo
}

interface OutputData {
  rta: boolean
}


@Component({
  selector: 'app-todo-dialog',
  standalone: true,
  imports: [BtnComponent, CommonModule, FontAwesomeModule],
  templateUrl: './todo-dialog.component.html'
})
export class TodoDialogComponent {
  faClose = faClose
  faCheckToSlot = faCheckToSlot
  faBars = faBars
  faUser = faUser
  faTag = faTag
  faCheckSquare = faCheckSquare
  faClock = faClock

  todo: ToDo

  constructor(
    private dialogRef: DialogRef<OutputData>,
    @Inject(DIALOG_DATA) data: InputData
  ) {
    this.todo = data.todo
  }

  close() {
    this.dialogRef.close({
      rta: true
    })
  }
}
