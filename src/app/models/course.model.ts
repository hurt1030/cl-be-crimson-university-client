import { User } from "./user.model";

export class Course {
  constructor(
    id: number,
    title: string,
    description: string,
    students: User[],
    professor: User
  ) {}
}
