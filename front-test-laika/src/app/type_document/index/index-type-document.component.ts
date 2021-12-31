import { Component, OnInit } from '@angular/core';
import { TypeDocumentService} from '../type-document.service';

@Component({
  selector: 'app-index-type-document',
  templateUrl: './index-type-document.component.html',
  styleUrls: ['./index-type-document.component.css']
})
export class IndexTypeDocumentComponent implements OnInit {

  typeDocuments: any[] = [];

  constructor(public typeDocumentService: TypeDocumentService) { }

  ngOnInit(): void {
    this.typeDocumentService.index().subscribe((data: any) => {
      this.typeDocuments = data.data;
    });
  }
  // tslint:disable-next-line:typedef
  deletePosition(id){
    this.typeDocumentService.delete(id).subscribe(res => {
      this.typeDocuments = this.typeDocuments.filter(item => item.id !== id);
    });
  }

}
