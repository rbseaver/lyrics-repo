import { Test, TestingModule } from '@nestjs/testing';
import { VersionController } from './version.controller';
import { VersionService } from './version.service';

// Mock version.service.ts so we're not actually reading from the file system
jest.mock('./version.service', () => ({
  VersionService: jest.fn().mockReturnValue({
    getVersion: jest.fn().mockReturnValue('1.0.0')
  })
}));

describe('when calling version controller', () => {
  let controller: VersionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VersionController],
      providers: [VersionService]
    }).compile();

    controller = module.get<VersionController>(VersionController);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  test('it should return the full version as a string', () => {
    const version: string = controller.getVersion();

    expect(version).toBe('1.0.0');
  });
});
