import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Transaction } from '../interfaces/transaction.interface';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  constructor(private http: HttpClient) {}

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<{transactions: Transaction[]}>('assets/data/transactions.json')
      .pipe(
        map(response => response.transactions.map(transaction => ({
          ...transaction,
          date: new Date(transaction.date)
        })))
      );
  }
}