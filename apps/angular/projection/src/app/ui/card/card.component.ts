import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  standalone: true,
  imports: [NgIf, NgFor, ListItemComponent],
})
export class CardComponent {
  @Input() list: any[] | null = null;
  @Input() customClass = '';

  @Input() cardImg = '';
  @Output() addNewItem = new EventEmitter<void>();
  @Output() delete = new EventEmitter<number>();

  deleteId(id: number) {
    this.delete.emit(id);
  }
}
