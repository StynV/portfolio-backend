import { Test, TestingModule } from '@nestjs/testing';
import { DataController } from './data.controller';
import { DataService } from './data.service';
import { DataModule } from './data.module';
import { getModelToken } from '@nestjs/mongoose';

describe('DataController', () => {
  let controller: DataController;
  let dataService: DataService;

  const mockRepository = {
    findByType() {
      return {};
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DataModule],
    })
      .overrideProvider(getModelToken('Data'))
      .useValue(mockRepository)
      .compile();

    dataService = module.get<DataService>(DataService);
    controller = module.get<DataController>(DataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
