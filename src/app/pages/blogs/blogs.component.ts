import { AppServiceService } from 'src/app/services/app-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  public arr!:any;

  constructor(private service: AppServiceService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(data => {
      this.arr = data;
      console.log(data);
      
    })
    // this.arr = this.service.blogArr;
    // console.log(this.arr);
  }
}
