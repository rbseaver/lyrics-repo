import { Test, TestingModule } from '@nestjs/testing';
import { VersionService } from './version.service';

jest.mock('fs', () => ({
  readFileSync: jest.fn().mockReturnValue(`{
    "name": "derp",
    "version": "0.0.1",
    "description": "This is a test"}`)
}));

describe('VersionService', () => {
  let service: VersionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VersionService]
    }).compile();

    service = module.get<VersionService>(VersionService);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  test('it should parse the version from file', async () => {
    const version: string = service.getVersion();

    expect(version).toBe('0.0.1');
  });
});
