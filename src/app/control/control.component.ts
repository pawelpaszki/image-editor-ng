import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  thumbnailSrc: string = 'assets/img/thumbnail.png';

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
}