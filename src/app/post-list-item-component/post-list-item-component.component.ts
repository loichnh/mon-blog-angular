import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postDate: number;
  @Input() postLoveIts: number;

  constructor() { }

  lovePlus() {
    this.postLoveIts++;
    // console.log(this.postLoveIts);
  }

  loveMinus() {
    this.postLoveIts--;
    // console.log(this.postLoveIts);
  }

  ngOnInit() {
  }

}
