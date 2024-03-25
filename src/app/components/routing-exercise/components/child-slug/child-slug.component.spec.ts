import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildSlugComponent } from './child-slug.component';

describe('ChildSlugComponent', () => {
  let component: ChildSlugComponent;
  let fixture: ComponentFixture<ChildSlugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildSlugComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildSlugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
