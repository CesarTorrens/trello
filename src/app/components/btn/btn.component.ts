import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn.component.html'
})
export class BtnComponent {

  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button'
  @Input() colorBtn: string = 'success'
  //gray-light
  get colors() {
    return {
      'text-gray-800': this.colorBtn === 'gray',
      'text-white': this.colorBtn !== 'gray',
      'bg-success-700': this.colorBtn === 'success',
      'hover:bg-success-800': this.colorBtn === 'success',
      'focus:ring-success-300': this.colorBtn === 'success',
      'bg-primary-700': this.colorBtn === 'primary',
      'hover:bg-primary-800': this.colorBtn === 'primary',
      'focus:ring-primary-300': this.colorBtn === 'primary',
      'bg-red-700': this.colorBtn === 'red',
      'hover:bg-red-800': this.colorBtn === 'red',
      'focus:ring-red-300': this.colorBtn === 'red',
      'bg-sky-700': this.colorBtn === 'sky',
      'hover:bg-sky-800': this.colorBtn === 'sky',
      'focus:ring-sky-300': this.colorBtn === 'sky',
      'bg-gray-200': this.colorBtn === 'gray',
      'hover:bg-gray-300': this.colorBtn === 'gray',
      'focus:ring-gray-300': this.colorBtn === 'gray',
    };
  }

}
