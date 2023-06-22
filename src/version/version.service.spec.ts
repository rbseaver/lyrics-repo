import { Test, TestingModule } from '@nestjs/testing';
import { VersionService } from './version.service';

describe('VersionService', () => {
  let service: VersionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VersionService],
    }).compile();

    service = module.get<VersionService>(VersionService);
  });

  test('should be defined', () => {
    expect(service).toBeDefined();
  });

  test('it should parse the version from file', async () => {
    const version: string = await service.getVersion();

    expect(version).toBe('1.0.0');
  });
});
