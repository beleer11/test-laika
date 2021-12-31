import { Component, OnInit } from '@angular/core';
import { PositionService } from '../position.service';
import { Position } from '../position';

@Component({
  selector: 'app-index-position',
  templateUrl: './index-position.component.html',
  styleUrls: ['./index-position.component.css']
})
export class IndexPositionComponent implements OnInit {

  positions: any[] = [];

  constructor(public positionService: PositionService) { }

  ngOnInit(): void {
    this.positionService.index().subscribe((data: any) => {
      this.positions = data.data;
    });
  }
  // tslint:disable-next-line:typedef
  deletePosition(id){
    this.positionService.delete(id).subscribe(res => {
      this.positions = this.positions.filter(item => item.id !== id);
    });
  }

}
