import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { StatCardComponent } from '../shared/stat-card/stat-card.component';
import { CardComponent } from '../shared/card/card.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let router: Router;
  
  const mockTransactions = [
    { 
      date: new Date('2024-03-15'), 
      description: 'Grocery Shopping', 
      category: 'Food', 
      amount: 2500, 
      type: 'expense' 
    },
    { 
      date: new Date('2024-03-14'), 
      description: 'Salary', 
      category: 'Income', 
      amount: 45000, 
      type: 'income' 
    }
  ];

  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    
    await TestBed.configureTestingModule({
      imports: [
        DashboardComponent,
        MatTableModule,
        MatButtonModule,
        StatCardComponent,
        CardComponent
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            data: of({ transactions: mockTransactions })
          }
        },
        {
          provide: Router,
          useValue: routerSpy
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update stat amounts on init', () => {
    expect(component.stats[0].amount).toBe(2500); // Food category amount
  });

  it('should show only 5 most recent transactions', () => {
    expect(component.recentTransactions.length).toBeLessThanOrEqual(5);
  });

  it('should sort transactions by date descending', () => {
    const dates = component.recentTransactions.map(t => t.date.getTime());
    const sortedDates = [...dates].sort((a, b) => b - a);
    expect(dates).toEqual(sortedDates);
  });

  it('should navigate to transactions page when viewAllTransactions is called', () => {
    component.viewAllTransactions();
    expect(router.navigate).toHaveBeenCalledWith(['/transactions']);
  });

  it('should calculate total for Food category correctly', () => {
    const foodStat = component.stats.find(s => s.category === 'Food');
    expect(foodStat?.amount).toBe(2500);
  });
});