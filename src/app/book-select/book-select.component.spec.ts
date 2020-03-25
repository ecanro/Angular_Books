import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSelectComponent } from './book-select.component';

describe('BookSelectComponent', () => {
  let component: BookSelectComponent;
  let fixture: ComponentFixture<BookSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
