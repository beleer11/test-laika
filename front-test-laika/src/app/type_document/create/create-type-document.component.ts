import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { TypeDocumentService } from '../type-document.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-type-document',
  templateUrl: './create-type-document.component.html',
  styleUrls: ['./create-type-document.component.css']
})
export class CreateTypeDocumentComponent implements OnInit {

  form: FormGroup;

  constructor(
    public typeDocumentService: TypeDocumentService,
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
    this.typeDocumentService.create(Array.of(this.form.value)).subscribe(res => {
      this.router.navigateByUrl('type_document/index');
    });
  }

}
