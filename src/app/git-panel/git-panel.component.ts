import { Component, OnInit, AfterViewInit } from '@angular/core';
import { File } from '../file';

@Component({
  selector: 'app-git-panel',
  templateUrl: './git-panel.component.html',
  styleUrls: ['./git-panel.component.css']
})
export class GitPanelComponent implements OnInit, AfterViewInit {

  // TODO: 从远程Git服务器得到的文件列表
  files: File[] = [
    {fileType: 'js', fileName: 'fileheader1-1.js', filePath: '/git-header/', fileStatus: 'M', fileStaged: true, fileTracked: true},
    {fileType: 'json', fileName: 'fileheader2.json', filePath: './git-header/', fileStatus: 'U', fileStaged: false, fileTracked: false},
    {fileType: 'ts', fileName: 'fileheader3.ts', filePath: '/git-header/', fileStatus: 'D', fileStaged: true, fileTracked: true},
    {fileType: 'html', fileName: 'fileheader4.html', filePath: '/git-header/', fileStatus: 'M', fileStaged: true, fileTracked: true},
    {fileType: 'css', fileName: 'fileheader5.css', filePath: '/git-header/', fileStatus: 'M', fileStaged: true, fileTracked: true},
    {fileType: 'less', fileName: 'fileheader6.less', filePath: '/git-header/', fileStatus: 'U', fileStaged: false, fileTracked: false},
    {fileType: 'png', fileName: 'fileheader7.png', filePath: '/git-header/', fileStatus: 'A', fileStaged: true, fileTracked: true},
    {fileType: 'jpg', fileName: 'fileheader8.jpg', filePath: '/git-header.ts/', fileStatus: 'A', fileStaged: true, fileTracked: true},
    {fileType: 'svg', fileName: 'fileheader9.svg', filePath: '/git-header/', fileStatus: 'A', fileStaged: true, fileTracked: true},
    {fileType: 'md', fileName: 'fileheader10.md', filePath: '/git-header.components/', fileStatus: 'M', fileStaged: true,
      fileTracked: true},
    // {fileType: "js", fileName: "fileheader11.js", filePath: "/git-header/", fileStatus: "M", fileStaged: true, fileTracked: true},
    // {fileType: "json", fileName: "fileheader12.json", filePath: "./git-header/", fileStatus: "U", fileStaged: false, fileTracked: false},
    // {fileType: "ts", fileName: "fileheader13.ts", filePath: "/git-header/", fileStatus: "D", fileStaged: true, fileTracked: true},
    // {fileType: "html", fileName: "fileheader14.html", filePath: "/git-header/", fileStatus: "M", fileStaged: true, fileTracked: true},
    // {fileType: "css", fileName: "fileheader15.css", filePath: "/git-header/", fileStatus: "M", fileStaged: true, fileTracked: true},
    // {fileType: "less", fileName: "fileheader16.less", filePath: "/git-header/", fileStatus: "U", fileStaged: false, fileTracked: false},
    // {fileType: "png", fileName: "fileheader17.png", filePath: "/git-header/", fileStatus: "A", fileStaged: true, fileTracked: true},
    // {fileType: "jpg", fileName: "fileheader18.jpg", filePath: "/git-header.ts/", fileStatus: "A", fileStaged: true, fileTracked: true},
    // {fileType: "svg", fileName: "fileheader19.svg", filePath: "/git-header/", fileStatus: "A", fileStaged: true, fileTracked: true},
    // {fileType: "md", fileName: "fileheader20.md", filePath: "/git-header/", fileStatus: "M", fileStaged: true, fileTracked: true},
    // {fileType: "js", fileName: "fileheader21.js", filePath: "/git-header/", fileStatus: "M", fileStaged: true, fileTracked: true},
    // {fileType: "json", fileName: "fileheader22.json", filePath: "./git-header/", fileStatus: "U", fileStaged: false, fileTracked: false},
    // {fileType: "ts", fileName: "fileheader23.ts", filePath: "/git-header/", fileStatus: "D", fileStaged: true, fileTracked: true},
    // {fileType: "html", fileName: "fileheader24.html", filePath: "/git-header/", fileStatus: "M", fileStaged: true, fileTracked: true},
    // {fileType: "css", fileName: "fileheader25.css", filePath: "/git-header/", fileStatus: "M", fileStaged: true, fileTracked: true},
    // {fileType: "less", fileName: "fileheader26.less", filePath: "/git-header/", fileStatus: "U", fileStaged: false, fileTracked: false},
    // {fileType: "png", fileName: "fileheader27.png", filePath: "/git-header/", fileStatus: "A", fileStaged: true, fileTracked: true},
    // {fileType: "jpg", fileName: "fileheader28.jpg", filePath: "/git-header/", fileStatus: "A", fileStaged: true, fileTracked: true},
    // {fileType: "svg", fileName: "fileheader29.svg", filePath: "/git-header/", fileStatus: "A", fileStaged: true, fileTracked: true},
    // {fileType: "md", fileName: "fileheader30.md", filePath: "/git-header/", fileStatus: "M", fileStaged: true, fileTracked: true},
  ];

  comment = '';
  message = '';

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    // TODO: 从远程Git服务器得到的文件列表，更新this.files
  }

  // 该方法接收了接收了fileList子组件发射的event数据，用于更新panel的this.files
  getData(event) {
    this.files = event;
    console.log('Getting filelist from filelist');
    console.log(this.files);
  }

  // 点击“提交按钮”
  commit() {
    // 将暂存区的文件列表commit —— git commit -m "xxx"
    // 首先检查input中是否已经输入message信息
    if (this.message === '') {
      console.log('Please input some message when committing...');
      return false;
    }
    // 执行git commit -m "xxx"(API)
    console.log('Committing and the message is: ' + this.message);

    // 清空this.message
    this.message = '';
  }

  // 输入框回调方法
  addComment() {
    this.message = this.comment;
    this.comment = '';
  }

  // 点击弹出菜单中的“同步”按钮(该功能用处较少，优先级较低)
  asyncToGit(): void {
    console.log('Async to git server...');
  }

  // 点击弹出菜单的“拉取”
  pull(): void {
    // git pull
    console.log('Pulling files from server...');
    // 调用git status -> fetch data from server -> update file list panel
  }

  // 点击弹出菜单的“推送”
  push(): void {
    // git push
    console.log('Pushing committed files to server...');
    // 调用git status -> fetch data from server -> update file list panel
  }

  // 点击弹出菜单“全部提交”
  commitAllFiles(): void {
    console.log('git add .');
    this.commitStagedFiles();
    // 调用git status -> fetch data from server -> update file list panel
  }

  // 点击弹出菜单“提交已暂存文件”
  commitStagedFiles(): void {
    // git commit -m "xxx"
    console.log('Committing staged files to server...');
    // 调用git status -> fetch data from server -> update file list panel
  }

  // 点击弹出菜单“撤销上次提交”
  resetLastCommittedFiles(): void {
    // git reset HEAD~
    console.log('Resetting last committed files...');
    // 调用git status -> fetch data from server -> update file list panel
  }

  stageAllFiles(): void {
    // git add .
    console.log('Staging all files...');
    // 调用git status -> fetch data from server -> update file list panel
  }

  removeAllStagedFiles(): void {
    // git reset HEAD .
    console.log('Removing all staged files...');
    // 调用git status -> fetch data from server -> update file list panel
  }

  // 点击“刷新”按钮
  refresh() {
    // 重新从服务器返回文件（状态）列表
    console.log('Refreshing...');
    // mock data
    this.files = [
      {fileType: 'js', fileName: 'fileheader1-1.js', filePath: '/git-header/', fileStatus: 'M', fileStaged: true, fileTracked: true},
      {fileType: 'json', fileName: 'fileheader2.json', filePath: './git-header/', fileStatus: 'U', fileStaged: false, fileTracked: false},
      {fileType: 'ts', fileName: 'fileheader3.ts', filePath: '/git-header/', fileStatus: 'D', fileStaged: true, fileTracked: true},
      {fileType: 'html', fileName: 'fileheader4.html', filePath: '/git-header/', fileStatus: 'M', fileStaged: true, fileTracked: true},
      {fileType: 'css', fileName: 'fileheader5.css', filePath: '/git-header/', fileStatus: 'M', fileStaged: true, fileTracked: true},
      {fileType: 'less', fileName: 'fileheader6.less', filePath: '/git-header/', fileStatus: 'U', fileStaged: false, fileTracked: false},
      {fileType: 'png', fileName: 'fileheader7.png', filePath: '/git-header/', fileStatus: 'A', fileStaged: true, fileTracked: true},
      {fileType: 'jpg', fileName: 'fileheader8.jpg', filePath: '/git-header.ts/', fileStatus: 'A', fileStaged: true, fileTracked: true},
      {fileType: 'svg', fileName: 'fileheader9.svg', filePath: '/git-header/', fileStatus: 'A', fileStaged: true, fileTracked: true},
      {fileType: 'md', fileName: 'fileheader10.md', filePath: '/git-header.components/',
        fileStatus: 'M', fileStaged: true, fileTracked: true},
    ];
  }
}
