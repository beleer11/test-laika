import { Component, OnInit } from '@angular/core';
import {PositionService} from '../position.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create-position.component.html',
  styleUrls: ['./create-position.component.css']
})
export class CreatePositionComponent implements OnInit {

  form: FormGroup;

  constructor(
    public positionService: PositionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name:  new FormControl('', [ Validators.required]),
      status: new FormControl('', [ Validators.required]),
    });
  }
  // tslint:disable-next-line:typedef
  get f(){
    return this.form.controls;
  }

  // tslint:disable-next-line:typedef
  submit(){
    this.positionService.create(Array.of(this.form.value)).subscribe(res => {
      this.router.navigateByUrl('position/index');
    });
  }

}
