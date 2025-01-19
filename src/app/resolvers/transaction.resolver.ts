import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { Transaction } from '../interfaces/transaction.interface';
import { TransactionService } from '../services/transaction.service';

export const transactionResolver: ResolveFn<Transaction[]> = () => {
  const transactionService = inject(TransactionService);
  return transactionService.getTransactions();
};