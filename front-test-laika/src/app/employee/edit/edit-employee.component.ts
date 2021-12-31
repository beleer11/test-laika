import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import {ActivatedRoute, Router} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  person: any;
  form: FormGroup;
  cargos: any[] = [];
  tipo_documentos: any[] = [];

  constructor(
    public employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idEmployee'];
    this.employeeService.findById(this.id).subscribe((data: any) => {
      this.person = data.data[0];
    });

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
    console.log(this.form.value);
    this.employeeService.update(this.id, Array.of(this.form.value)).subscribe(res => {
      this.router.navigateByUrl('employee/index');
    });
  }

}
