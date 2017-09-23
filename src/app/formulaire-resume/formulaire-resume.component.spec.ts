import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireResumeComponent } from './formulaire-resume.component';

describe('FormulaireResumeComponent', () => {
  let component: FormulaireResumeComponent;
  let fixture: ComponentFixture<FormulaireResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
