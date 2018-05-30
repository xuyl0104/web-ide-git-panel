import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { File } from '../../file';

@Component({
  selector: 'app-git-file-item',
  templateUrl: './git-file-item.component.html',
  styleUrls: ['./git-file-item.component.css']
})
export class GitFileItemComponent implements OnInit {

  @Input()
  fileItem: File;

  fileIconName: string;
  fileIconPath: string;
  fileStatusClassName: string;

  isAdded = false;
  isModified = false;
  isDeleted = false;
  isUntracked = false;

  @Output() onAddFile = new EventEmitter<boolean>();

  @Output() onRemoveFile = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
    // console.log(this.fileItem);
    this.getFileIcon();
    this.getFileStatusClass();
  }

  getFileIcon() {
    const fileName = this.fileItem.fileName;
    const fileExtension = fileName.split('.')[fileName.split('.').length - 1];
    const fileIconName = 'file_type_' + fileExtension + '.svg';
    const fileIconPath = './assets/icon/' + fileIconName;

    this.fileIconName = fileIconName;
    this.fileIconPath = fileIconPath;
  }

  getIconFromName(fileExtension) {
    switch (fileExtension) {
      case 'js':

        break;

      default:
        break;
    }
  }

  getFileStatusClass() {
    const fileStatus = this.fileItem.fileType;
    let fileStatusClassName;
    switch (fileStatus) {
      case 'M':
        this.isModified = true;
        fileStatusClassName = 'file-status-modified';
        break;
      case 'U':
      this.isUntracked = true;
        fileStatusClassName = 'file-status-untracked';
        break;
      case 'D':
        this.isDeleted = true;
        fileStatusClassName = 'file-status-deleted';
        break;
      case 'A':
        this.isAdded = true;
        fileStatusClassName = 'file-status-added';
        break;
      default:
        fileStatusClassName = '';
        break;
    }
    this.fileStatusClassName = fileStatusClassName;
  }

  addFile(file) {
    this.clickAdd(file);
  }

  removeFile(file) {
    this.clickRemove(file);
  }

  getFileDetails(file) {
    // 根据file的fileName和filePath，调用API，获取文件的详细信息，得到git diff信息，使用插件进行差异展示
    console.log(file);
    console.log('git diff: ' + file.filePath + file.fileName);
  }

  clickAdd(file) {
    this.onAddFile.emit(file);
  }

  clickRemove(file) {
    this.onRemoveFile.emit(file);
  }

}
