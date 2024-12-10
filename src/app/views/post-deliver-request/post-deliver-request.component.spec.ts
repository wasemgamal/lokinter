import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDeliverRequestComponent } from './post-deliver-request.component';

describe('PostDeliverRequestComponent', () => {
  let component: PostDeliverRequestComponent;
  let fixture: ComponentFixture<PostDeliverRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostDeliverRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostDeliverRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
