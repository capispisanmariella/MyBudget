import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TransactionService } from '../services/transaction.service';
import { transactionResolver } from './transaction.resolver';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

describe('transactionResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TransactionService]
    });
  });

  it('should be created', () => {
    const resolver = TestBed.runInInjectionContext(() => {
      const result = transactionResolver({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot);
      expect(result).toBeTruthy();
    });
  });
});