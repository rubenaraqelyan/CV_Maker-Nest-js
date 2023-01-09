import { Test, TestingModule } from '@nestjs/testing';
import { PhoneNumbersController } from './phone_numbers.controller';

describe('PhoneNumbersController', () => {
  let controller: PhoneNumbersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhoneNumbersController],
    }).compile();

    controller = module.get<PhoneNumbersController>(PhoneNumbersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
