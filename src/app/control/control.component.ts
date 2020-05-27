import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  thumbnailSrc: string = 'assets/img/thumb.png'; // change later to assets/img/thumbnail.png
  inputWidth: number = 0;
  inpuHeight: number = 0;
  currentTargetThumbHeight: number = 0;
  currentTargetThumbWidth: number = 0;
  inputX: number = 0;
  inputY: number = 0;
  currentTargetX: number = 0;
  currentTargetY: number = 0;
  rotate: number = 0;

  constructor(public fb: FormBuilder) { }

  modeForm = this.fb.group({
    mode: ['highlight']
  });

  ngOnInit() {
  }

  // mode form
  updateMode(value: string) {
    console.log(value);
    this.fb.group({
      gender: [value]
    });
  }

  zoomOptions: any = ['1x', '2x', '4x'];
  
  zoomForm = new FormGroup({
    zoomForm: new FormControl('1x')
  });
  
  changeZoom(e) {
    console.log(e.target.value);
  }

  highlightOptions: any = ['1px', '5px', '20px', 'rectangular', 'flood'];
  
  highlightForm = new FormGroup({
    highlightForm: new FormControl('1px')
  });

  changeHighlightMode(e) {
    console.log(e.target.value);
  }

  targetOptions: any = [];
  
  targetForm = new FormGroup({
    targetForm: new FormControl('')
  });

  changeTarget(e) {
    console.log(e.target.value);
  }

  checkWidth(width: number): void {
    // add logic to enable resize button
    console.log(width);
  }

  checkHeight(height: number): void {  
    // add logic to enable resize button
    console.log(height);
  }

  loadImage() {
    console.log("TBD - load image");
  }

  save() {
    console.log("TBD - save");
  }

  resetThumb() {
    console.log("TBD - resetThumb");
  }

  resizeThumb() {
    console.log("TBD - resizeThumb");
  }

  resetCoordinates() {
    console.log("TBD - resetCoordinates");
  }

  moveTarget() {
    console.log("TBD - moveTarget");
  }

  checkX(x: number): void {
    // add logic to enable move button
    console.log(x);
  }

  checkY(y: number): void {  
    // add logic to enable move button
    console.log(y);
  }

  rotateTarget() {
    console.log(this.rotate);
  }
}