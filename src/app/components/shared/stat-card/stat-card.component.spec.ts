import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatCardComponent } from './stat-card.component';
import { MatIconModule } from '@angular/material/icon';

describe('StatCardComponent', () => {
  let component: StatCardComponent;
  let fixture: ComponentFixture<StatCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatCardComponent, MatIconModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render input properties correctly', () => {
    // Arrange
    const testData = {
      icon: 'lunch_dining',
      amount: 1000,
      label: 'Food',
      color: '#FF6B6B'
    };

    // Act
    component.icon = testData.icon;
    component.amount = testData.amount;
    component.label = testData.label;
    component.color = testData.color;
    fixture.detectChanges();

    // Assert
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('mat-icon')?.textContent).toContain(testData.icon);
    expect(compiled.querySelector('h3')?.textContent).toContain('₱1,000.00');
    expect(compiled.querySelector('p')?.textContent).toContain(testData.label);
    expect(getComputedStyle(compiled.querySelector('mat-icon') as HTMLElement).color)
    .toBe('rgb(255, 107, 107)');
  });
});