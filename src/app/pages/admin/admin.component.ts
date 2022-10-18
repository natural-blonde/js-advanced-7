import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public blogArr!: any;
  public index!: number;
  public editStatus = false;

  constructor(private service: AppServiceService) { }

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs() {
    this.service.getAll().subscribe(data => {
      this.blogArr = data;
      this.service.blogArr = this.blogArr;
      console.log('data', data);
    })
  }

  addPost() {
    if (document.querySelector<HTMLInputElement>('.input-1')!.value !== '' && document.querySelector<HTMLInputElement>('.input-2')!.value !== '' && document.querySelector<HTMLInputElement>('.input-3')!.value !== '') {
      const blog = {
        title: document.querySelector<HTMLInputElement>('.input-1')!.value,
        text: document.querySelector<HTMLInputElement>('.input-2')!.value,
        author: document.querySelector<HTMLInputElement>('.input-3')!.value,
      }
      this.service.post(blog).subscribe(data => {
        this.getBlogs();
        console.log('data', data);
      });
      this.resetForms();
    }
  }

  delete(blog: any) {
    console.log(blog.id);
    this.service.delete(blog.id).subscribe(data => {
      this.getBlogs();
    })
  }

  edit(blog: any) {
    this.index = blog.id;
    document.querySelector<HTMLInputElement>('.input-1')!.value = blog.title;
    document.querySelector<HTMLInputElement>('.input-2')!.value = blog.text;
    document.querySelector<HTMLInputElement>('.input-3')!.value = blog.author;
    this.editStatus = true;
  }

  savePost() {
    const editedBlog = {
      title: document.querySelector<HTMLInputElement>('.input-1')!.value,
      text: document.querySelector<HTMLInputElement>('.input-2')!.value,
      author: document.querySelector<HTMLInputElement>('.input-3')!.value
    }
    this.editStatus = false;
    this.service.update(this.index, editedBlog).subscribe(data => {
      this.getBlogs();
      this.resetForms();
    });
  }

  resetForms() {
    document.querySelector<HTMLInputElement>('.input-1')!.value = '';
    document.querySelector<HTMLInputElement>('.input-2')!.value = '';
    document.querySelector<HTMLInputElement>('.input-3')!.value = '';
  }
}