import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { File } from '../file';

@Component({
  selector: 'app-git-filelist',
  templateUrl: './git-filelist.component.html',
  styleUrls: ['./git-filelist.component.css']
})
export class GitFilelistComponent implements OnInit, OnChanges {

  @Input() fileList: File[];

  updatedFileList: File[]; // 更新后的文件列表

  untrackedFiles: File[];
  trackedFiles: File[];

  stagedFiles: File[];
  unStagedFiles: File[];

  otherFiles: File[];

  @Output() event = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  ngOnChanges() {
    console.log(this.fileList);
    const allFiles = this.fileList || [];

    const untrackedFiles = allFiles.filter((file, index) => {
      return file.fileTracked === false;
    });

    const trackedFiles = allFiles.filter((file, index) => {
      return file.fileTracked === true;
    });

    const stagedFiles = allFiles.filter((file, index) => {
      return file.fileStaged === true;
    });

    const unStagedFiles = allFiles.filter((file, index) => {
      return file.fileStaged === false;
    });

    let otherFiles = unStagedFiles.concat(untrackedFiles);
    otherFiles = Array.from(new Set(otherFiles));

    this.unStagedFiles = unStagedFiles;

    this.trackedFiles = trackedFiles;
    this.untrackedFiles = untrackedFiles;

    this.stagedFiles = stagedFiles; // 暂存的更改文件，在上方区域显示的文件
    this.otherFiles = otherFiles; // 除了staged阶段的文件，在下方区域显示的文件
  }

  // 每次点击“+”、“-”、“刷新”、“提交”等按钮，执行该方法，从服务器取得最新的文件（状态）列表
  fetchFilesFromServer() {
    console.log('Fetching updated filelist from server...');
    // fetch (API)
    this.updatedFileList = this.fileList.concat(
      {fileType: 'js', fileName: Math.ceil(Math.random() * 10) * Math.ceil(Math.random() * 10) +
        'fileheader.js', filePath: '/git-header/', fileStatus: 'M', fileStaged: true, fileTracked: true}
      );
    // emit
    this.event.emit(this.updatedFileList);
  }

  // 点击“+”按钮，git add
  gitAdd(file): void {
    // 执行git add(API)
    console.log('git add ' + file.filePath + file.fileName);
  }

  // 点击“-”按钮，撤销暂存的文件
  gitRemove(file): void {
    // 执行 reset(API)
    console.log('git reset HEAD ' + file.filePath + file.fileName);
  }

  // 点击文件item上的+号按钮，进行git add，从服务器端传回更新后的文件（状态）列表
  onAddFile(file): void {
    this.otherFiles.splice(this.otherFiles.indexOf(file), 1);
    const addedFile = file;
    addedFile.fileStaged = true;
    addedFile.fileTracked = true;

    this.stagedFiles.push(addedFile);
    this.gitAdd(file);

    this.fetchFilesFromServer();
  }

  // 点击文件item上的-号按钮，撤销上次git add操作，从服务器端传回更新后的文件（状态）列表
  onRemoveFile(file): void {
    this.stagedFiles.splice(this.stagedFiles.indexOf(file), 1);
    const removedFile = file;
    removedFile.fileStaged = false;
    removedFile.fileTracked = false;

    this.otherFiles.push(removedFile);
    this.gitRemove(file);

    this.fetchFilesFromServer();
  }

  stageAllFiles(): void {
    // git add -A -- .
    console.log('Staging all files...' + 'git add -A -- .');
    // 调用git status -> fetch data from server -> update file list panel
  }

  removeAllStagedFiles(): void {
    // git reset -q HEAD -- .
    console.log('Removing all staged files...' + 'git reset -q HEAD -- .');
    // 调用git status -> fetch data from server -> update file list panel
  }

  rescindAllEdit() {
    // git checkout -- [filename]
    console.log('Rescinding all edit...');
  }
}
