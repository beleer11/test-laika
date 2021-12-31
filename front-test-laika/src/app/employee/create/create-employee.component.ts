import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateComponent implements OnInit {
  cargos: any[] = [];
  tipo_documentos: any[] = [];
  form: FormGroup;

  constructor(
    public employeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      name:  new FormControl('', [ Validators.required]),
      tel: new FormControl('', [ Validators.required]),
      n_document: new FormControl('', [ Validators.required]),
      position_id: new FormControl('', [ Validators.required]),
      document_type_id: new FormControl('', [ Validators.required]),
    });

    this.employeeService.getDataSelect().subscribe((data: any) => {
      this.cargos = data.cargo;
      this.tipo_documentos = data.tipo_documento;
    });
  }

  // tslint:disable-next-line:typedef
  get f(){
    return this.form.controls;
  }

  // tslint:disable-next-line:typedef
  submit(){
    this.employeeService.create(Array.of(this.form.value)).subscribe(res => {
      this.router.navigateByUrl('employee/index');
    });
  }

}
