import { Component } from '@angular/core';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import {DialogModule, Dialog} from '@angular/cdk/dialog';
import { Column, ToDo } from '../../models/todo.model';
import { TodoDialogComponent } from '../../components/todo-dialog/todo-dialog.component';


@Component({
  selector: 'app-board',
  standalone: true,
  imports: [DragDropModule, NavbarComponent, CommonModule, DialogModule, TodoDialogComponent],
  templateUrl: './board.component.html',
  styles: `
  /* Animate items as they're being sorted. */
.cdk-drop-list-dragging .cdk-drag {
  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
}

/* Animate an item that has been dropped. */
.cdk-drag-animating {
  transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
}
  `,
})
export class BoardComponent {

  constructor(
    private dialog: Dialog
  ) {}

  columns: Column[] = [
    {
      title: 'ToDo',
      todos: [
        {
          id: '1',
          title: 'Task 1',
        },
        {
          id: '2',
          title: 'Task 2',
        },
        {
          id: '3',
          title: 'Task 3',
        },
      ]
    },
    {
      title: 'Doing',
      todos: [
        {
          id: '4',
          title: 'doing 1',
        },
        {
          id: '5',
          title: 'doing 2',
        },
      ]
    },
    {
      title: 'Done',
      todos: [
        {
          id: '6',
          title: 'done 1',
        },
      ]
    }
  ]



  drop(event: CdkDragDrop<any[] >) {
    const currentIndex = event.currentIndex;
    const prevIndex = event.previousIndex;
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, prevIndex, currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        currentIndex,
        prevIndex
      )
    }
  }

  addColumn() {
    this.columns.push({
      title: 'New Column',
      todos: []
    })
  }

  dropColumn(event: CdkDragDrop<any[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      )
    }
  }

  openDialog(todo: ToDo) {
    const dialogRef = this.dialog.open(TodoDialogComponent, {
      minWidth: '300px',
      maxWidth: '40%',
      data: {
        todo
      }
    })
    dialogRef.closed.subscribe(output => {
      console.log(output)
    })
  }
}
