import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexTypeDocumentComponent } from './index-type-document.component';

describe('IndexTypeDocumentComponent', () => {
  let component: IndexTypeDocumentComponent;
  let fixture: ComponentFixture<IndexTypeDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexTypeDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexTypeDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
