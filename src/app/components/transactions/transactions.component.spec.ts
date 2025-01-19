import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionsComponent } from './transactions.component';
import { ActivatedRoute } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { Transaction } from '../../interfaces/transaction.interface';

describe('TransactionsComponent', () => {
  let component: TransactionsComponent;
  let fixture: ComponentFixture<TransactionsComponent>;

  const mockTransactions: Transaction[] = [
    { 
      id: 1,
      date: new Date('2024-03-15'), 
      description: 'Grocery Shopping', 
      category: 'Food', 
      amount: 2500, 
      type: 'expense' 
    },
    { 
      id: 2,
      date: new Date('2024-03-14'), 
      description: 'Salary', 
      category: 'Income', 
      amount: 45000, 
      type: 'income' 
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TransactionsComponent,
        MatTableModule,
        MatPaginatorModule,
        BrowserAnimationsModule
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            data: of({ transactions: mockTransactions })
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load transactions into table', () => {
    expect(component.dataSource.data).toEqual(mockTransactions);
  });

  it('should set up paginator after view init', () => {
    component.ngAfterViewInit();
    expect(component.dataSource.paginator).toBeTruthy();
  });

  it('should display correct columns', () => {
    expect(component.displayedColumns).toEqual(['date', 'description', 'category', 'amount']);
  });
});