import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { TokenInterceptor } from './token.interceptor';

describe('TokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
    providers: [
      TokenInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TokenInterceptor = TestBed.inject(TokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
