import { TestBed } from '@angular/core/testing';

import { WSService } from './ws.service';
import {describe, expect} from "@angular/core/testing/src/testing_internal";

describe('WSService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WSService = TestBed.get(WSService);
    expect(service).toBeTruthy();
  });
});
