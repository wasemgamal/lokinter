import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverRequestInfoComponent } from './deliver-request-info.component';

describe('DeliverRequestInfoComponent', () => {
  let component: DeliverRequestInfoComponent;
  let fixture: ComponentFixture<DeliverRequestInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliverRequestInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliverRequestInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
