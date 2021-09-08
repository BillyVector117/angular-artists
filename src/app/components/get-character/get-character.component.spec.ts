import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCharacterComponent } from './get-character.component';

describe('GetCharacterComponent', () => {
  let component: GetCharacterComponent;
  let fixture: ComponentFixture<GetCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCharacterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
