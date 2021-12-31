import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-index-employee',
  templateUrl: './index-employee.component.html',
  styleUrls: ['./index-employee.component.css']
})
export class IndexEmployeeComponent implements OnInit {

  employees: any[] = [];

  constructor(public employeeService: EmployeeService) { }


  ngOnInit(): void {
    this.employeeService.index().subscribe((data: any) => {
      this.employees = data.data;
    });
  }
  // tslint:disable-next-line:typedef
  deletePosition(id){
    this.employeeService.delete(id).subscribe(res => {
      this.employees = this.employees.filter(item => item.id !== id);
    });
  }

}
