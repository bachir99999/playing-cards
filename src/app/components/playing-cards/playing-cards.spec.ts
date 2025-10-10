import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayingCards } from './playing-cards';

describe('PlayingCards', () => {
  let component: PlayingCards;
  let fixture: ComponentFixture<PlayingCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayingCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayingCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
