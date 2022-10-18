import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  public blogArr = [];

  private url = environment.BACKEND_URL;
  private api = { blogs: `${this.url}/blogs` }

  constructor(private htpp: HttpClient) { }

  getAll() {
    return this.htpp.get(this.api.blogs);
  }

  post(obj: any) {
    return this.htpp.post(this.api.blogs, obj);
  }

  delete(id: number) {
    return this.htpp.delete(`${this.api.blogs}/${id}`);
  }

  update(id: number, blog: any) {
    return this.htpp.patch(`${this.api.blogs}/${id}`, blog);
  }
}
