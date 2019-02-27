import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/_models/article';

@Component({
  selector: 'app-newest',
  templateUrl: './newest.component.html',
  styleUrls: ['./newest.component.css']
})
export class NewestComponent implements OnInit {
  @Input() articles: Article[];
  constructor() { }

  ngOnInit() {
  }

}
