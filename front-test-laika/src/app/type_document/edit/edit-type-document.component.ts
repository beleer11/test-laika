import { Component, OnInit } from '@angular/core';
import {TypeDocumentService} from '../type-document.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-type-document',
  templateUrl: './edit-type-document.component.html',
  styleUrls: ['./edit-type-document.component.css']
})
export class EditTypeDocumentComponent implements OnInit {

  id: number;
  cargo: any;
  form: FormGroup;

  constructor(
    public typeDocumentService: TypeDocumentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idTypeDocument'];
    this.typeDocumentService.findById(this.id).subscribe((data: any) => {
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
    this.typeDocumentService.update(this.id, Array.of(this.form.value)).subscribe(res => {
      this.router.navigateByUrl('type_document/index');
    });
  }

}
