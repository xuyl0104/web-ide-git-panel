import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-git-header',
  templateUrl: './git-header.component.html',
  styleUrls: ['./git-header.component.css']
})
export class GitHeaderComponent implements OnInit {

  @Input() files;

  constructor() { }

  ngOnInit() {
  }

  asyncToGit(): void {
    console.log('Async to git server...');
    console.log(this.files);
  }

}
