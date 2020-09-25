import { TestBed } from '@angular/core/testing';
import { ArticlesService } from './articles.service';
import { ArticlesResponse } from '../types/article';
import { articlesResponseMock } from './articles.mock';

describe('ArticlesService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let articlesService: ArticlesService;

  beforeEach(() => {
    // TestBed.configureTestingModule({});
    // articlesService = TestBed.inject(ArticlesService);
    httpClientSpy = jasmine.createSpyObj('HTTPClient', ['get']);
    articlesService = new ArticlesService(httpClientSpy as any);
  });

  it('should return expected articles (HttpClient called once)', () => {
    const expectedArticles: ArticlesResponse = articlesResponseMock;
    httpClientSpy.get.and.returnValue(expectedArticles);
    articlesService
      .getArticles('react')
      .subscribe(
        (response) =>
          expect(response).toEqual(expectedArticles, 'expected Articles'),
        fail
      );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});
