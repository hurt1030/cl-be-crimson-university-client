import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  baseUrl = 'http://localhost:3000/api/v1/courses/'

  constructor(private http: HttpClient) { }

  getCourses() {
    return this.http.get(this.baseUrl + 'list');
  }
}
