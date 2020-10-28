import { ToasterService } from './../modules/toaster/services/toaster.service';
import { TestBed } from '@angular/core/testing';
import { ArticlesService } from './articles.service';
import { ArticlesResponse } from '../types/article';
import { articlesResponseMock } from './articles.mock';
import { of } from 'rxjs';

describe('ArticlesService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let articlesService: ArticlesService;
  let toasterService: ToasterService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HTTPClient', ['get']);
    articlesService = new ArticlesService(
      httpClientSpy as any,
      toasterService as any
    );
  });

  it('should return expected articles (HttpClient called once)', async () => {
    const expectedArticles: ArticlesResponse = articlesResponseMock;
    httpClientSpy.get.and.returnValue(of(expectedArticles));
    articlesService
      .getArticles('react')
      .subscribe(
        (heroes) =>
          expect(heroes).toEqual(expectedArticles, 'expected articles'),
        fail
      );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});
