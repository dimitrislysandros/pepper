import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/_models/article';

@Component({
  selector: 'app-today-pops',
  templateUrl: './today-pops.component.html',
  styleUrls: ['./today-pops.component.css']
})
export class TodayPopsComponent implements OnInit {
  @Input() articles: Article[];
  constructor() { }

  ngOnInit() {
  }

}
