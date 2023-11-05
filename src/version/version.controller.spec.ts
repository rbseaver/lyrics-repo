import { Test, TestingModule } from '@nestjs/testing';
import { VersionController } from './version.controller';
import { VersionService } from './version.service';

describe('when calling version controller', () => {
  let controller: VersionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VersionController],
      providers: [VersionService]
    }).compile();

    controller = module.get<VersionController>(VersionController);
  });

  test('it should be defined', () => {
    expect(controller).toBeDefined();
  });

  test('it should return the full version as a string', async () => {
    const version: string = await controller.getVersion();

    expect(version).toBe('1.0.0');
  });
});
