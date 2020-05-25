import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

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

  zoomOptions: any = ['1x', '2x', '4x']
  
  form = new FormGroup({
    zoom: new FormControl('1x')
  });
  
  changeZoom(e) {
    console.log(e.target.value);
  }
}
