import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  standalone: true,
  imports: [NgIf, NgFor, ListItemComponent, NgTemplateOutlet],
})
export class CardComponent<T> {
  @Input() list: T[] | null = null;
  @Input() customClass = '';

  @Input() cardImg = '';
  @Output() addNewItem = new EventEmitter<void>();

  @ContentChild('newRef', { read: TemplateRef }) rowTemplate!: TemplateRef<{
    $implicit: T;
  }>;
}
