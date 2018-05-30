import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-git-input',
  templateUrl: './git-input.component.html',
  styleUrls: ['./git-input.component.css']
})
export class GitInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addComment() {
    console.log('adding comment...');
  }
}
