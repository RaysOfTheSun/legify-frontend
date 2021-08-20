import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'legify-web-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {
  @Output() handleClick: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  public publishClickEvent(): void {
    this.handleClick.emit(true);
  }

  ngOnInit(): void {}
}
