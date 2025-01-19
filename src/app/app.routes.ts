import { Routes } from '@angular/router';
import { MainLayoutComponent } from './components/layouts/main-layout/main-layout.component';
import { AuthGuard } from './guards/auth.guard';
import { transactionResolver } from './resolvers/transaction.resolver';
import { LoginComponent } from './components/auth/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { ErrorComponent } from './components/error/error.component'

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'login',
    pathMatch: 'full' 
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        canActivateChild: [AuthGuard],
        resolve: {
          transactions: transactionResolver
        },
        component: DashboardComponent
      },
      {
        path: 'transactions',
        canActivateChild: [AuthGuard],
        resolve: {
          transactions: transactionResolver
        },
        component: TransactionsComponent
      }
    ]
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
];