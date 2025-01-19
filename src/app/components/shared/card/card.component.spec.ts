import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { Component } from '@angular/core';

@Component({
  template: `
    <app-card [title]="'Test'">
      <div class="card-content">Main Content</div>
      <div actions>Action Content</div>
    </app-card>
  `
})
class TestHostComponent {}

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let hostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent],
      declarations: [TestHostComponent]
    }).compileComponents();
    
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const testTitle = 'Test Card Title';
    component.title = testTitle;
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain(testTitle);
  });

  it('should project content correctly', () => {
    hostFixture = TestBed.createComponent(TestHostComponent);
    hostFixture.detectChanges();
    
    const compiled = hostFixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('[actions]')?.textContent?.trim()).toBe('Action Content');
    expect(compiled.querySelector('.card-content')?.textContent?.trim()).toBe('Main Content');
  });
});