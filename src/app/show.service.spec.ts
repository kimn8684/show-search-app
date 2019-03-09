import { TestBed, inject } from '@angular/core/testing';
import { ShowService } from './show.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ShowService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [ShowService],
  }));
  it('should be created', inject([ShowService], (service: ShowService) => {
    expect(service).toBeTruthy();
  }))
});
