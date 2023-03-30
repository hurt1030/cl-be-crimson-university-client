import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[];

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
      this.coursesService.getCourses().subscribe((res: any) => {
        if (res.success) {
          this.courses = res.payload;
        }
      })
  }

}
