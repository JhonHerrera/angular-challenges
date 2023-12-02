import { Component, OnInit } from '@angular/core';
import {
  FakeHttpService,
  randTeacher,
} from '../../data-access/fake-http.service';
import { TeacherStore } from '../../data-access/teacher.store';
import { Teacher } from '../../model/teacher.model';
import { CardComponent } from '../../ui/card/card.component';
import { ListItemComponent } from '../../ui/list-item/list-item.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-teacher-card',
  template: `
    <app-card
      customClass="bg-light-red"
      [list]="teachers"
      [cardImg]="image"
      (addNewItem)="addTeacher()"
      (delete)="deleteTeacher($event)">
    </app-card>
  `,
  standalone: true,
  imports: [CardComponent, ListItemComponent, NgFor],
})
export class TeacherCardComponent implements OnInit {
  teachers: Teacher[] = [];
  image = 'assets/img/teacher.png';

  constructor(private http: FakeHttpService, private store: TeacherStore) {}

  ngOnInit(): void {
    this.http.fetchTeachers$.subscribe((t) => this.store.addAll(t));
    this.store.teachers$.subscribe((t) => (this.teachers = t));
  }

  addTeacher() {
    this.store.addOne(randTeacher());
  }

  deleteTeacher(id: number) {
    this.store.deleteOne(id);
  }
}
