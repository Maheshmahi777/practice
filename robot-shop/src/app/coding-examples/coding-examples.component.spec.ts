import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingExamplesComponent } from './coding-examples.component';

describe('CodingExamplesComponent', () => {
  let component: CodingExamplesComponent;
  let fixture: ComponentFixture<CodingExamplesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodingExamplesComponent]
    });
    fixture = TestBed.createComponent(CodingExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
