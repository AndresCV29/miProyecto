import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})
export class ContentComponent implements OnInit {
  loading: any;
  listData: any;

  constructor() { }

  ngOnInit(): void {
  }

}
