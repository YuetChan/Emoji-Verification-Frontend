import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AWSFaceDetectTestComponent } from './awsface-detect-test.component';

describe('AWSFaceDetectTestComponent', () => {
  let component: AWSFaceDetectTestComponent;
  let fixture: ComponentFixture<AWSFaceDetectTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AWSFaceDetectTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AWSFaceDetectTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
