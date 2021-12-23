import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp06ForumulariosComponent } from './cmp06-forumularios.component';

describe('Cmp06ForumulariosComponent', () => {
  let component: Cmp06ForumulariosComponent;
  let fixture: ComponentFixture<Cmp06ForumulariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp06ForumulariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp06ForumulariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
