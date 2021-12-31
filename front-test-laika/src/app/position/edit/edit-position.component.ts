import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PositionService} from '../position.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-position',
  templateUrl: './edit-position.component.html',
  styleUrls: ['./edit-position.component.css']
})
export class EditPositionComponent implements OnInit {

  id: number;
  cargo: any;
  form: FormGroup;

  constructor(
    public positionService: PositionService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idCargo'];
    this.positionService.findById(this.id).subscribe((data: any) => {
      this.cargo = data.data[0];
    });

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
    console.log(this.form.value);
    this.positionService.update(this.id, Array.of(this.form.value)).subscribe(res => {
      this.router.navigateByUrl('position/index');
    });
  }

}
