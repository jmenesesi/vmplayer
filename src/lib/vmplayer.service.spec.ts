import { TestBed } from '@angular/core/testing';

import { VmplayerService } from './vmplayer.service';

describe('VmplayerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VmplayerService = TestBed.get(VmplayerService);
    expect(service).toBeTruthy();
  });
});
