import { Component, OnInit } from '@angular/core';
import { IPost } from './post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:IPost[] = [{title:"Will Deno.js replace node.js",author:"Ryan Dahl",creationDate:new Date()},
                  {title:"Angular 9 template types",author:"Kekin Chheda",creationDate:new Date()}];

  constructor() { }

  ngOnInit() {
  }

}
