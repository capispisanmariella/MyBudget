import { Component, OnInit } from '@angular/core';
import { StatCardComponent } from '../shared/stat-card/stat-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { TransactionService } from '../../services/transaction.service';
import { Transaction } from '../../interfaces/transaction.interface';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    StatCardComponent,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    CardComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  stats = [
    { icon: 'lunch_dining', amount: 0, label: 'Food', color: '#FF6B6B', category: 'Food' },
    { icon: 'local_taxi', amount: 0, label: 'Transport', color: '#4D96FF', category: 'Transport' },
    { icon: 'receipt_long', amount: 0, label: 'Bills', color: '#FFB84C', category: 'Bills' },
    { icon: 'local_mall', amount: 0, label: 'Shop', color: '#05AAEB', category: 'Shop' }
  ];

  displayedColumns: string[] = ['date', 'description', 'category', 'amount'];
  recentTransactions: Transaction[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      const transactions = data['transactions'];
      this.updateStatAmounts(transactions);
      this.recentTransactions = transactions
      .sort((a: Transaction, b: Transaction) => b.date.getTime() - a.date.getTime())
      .slice(0, 5);
    });
  }

  private updateStatAmounts(transactions: Transaction[]) {
    this.stats = this.stats.map(stat => ({
      ...stat,
      amount: this.calculateTotalForCategory(transactions, stat.category)
    }));
  }

  private calculateTotalForCategory(transactions: Transaction[], category: string): number {
    return transactions
      .filter(t => t.category === category && t.type === 'expense')
      .reduce((total, t) => total + t.amount, 0);
  }

  viewAllTransactions() {
    this.router.navigate(['/transactions']);
  }
}