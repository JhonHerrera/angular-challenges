import { Teacher } from './teacher.model';

export interface Student {
  id: number;
  name: string;
  lastname: string;
  mainTeacher: Teacher;
  school: string;
}
