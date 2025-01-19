import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;
  let router: Router;

  beforeEach(() => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthService,
        { provide: Router, useValue: routerSpy }
      ]
    });

    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
    router = TestBed.inject(Router);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should handle successful login', () => {
    const mockUser = {
      id: 1,
      email: 'test@example.com',
      password: 'password123',
      name: 'Test User',
      role: 'user'
    };

    const mockResponse = {
      users: [mockUser]
    };

    service.login('test@example.com', 'password123').subscribe(user => {
      expect(user).toBeTruthy();
      expect(localStorage.getItem('currentUser')).toBeTruthy();
    });

    const req = httpMock.expectOne('assets/data/users.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});