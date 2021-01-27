import { Test, TestingModule } from '@nestjs/testing';
import { DisclosureController } from './disclosure.controller';

describe('DisclosureController', () => {
  let controller: DisclosureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DisclosureController],
    }).compile();

    controller = module.get<DisclosureController>(DisclosureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
