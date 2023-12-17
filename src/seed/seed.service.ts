import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedService {
  fillSeed() {
    return 'This action adds a new seed';
  }
}
