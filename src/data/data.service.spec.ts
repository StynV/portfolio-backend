import { Test, TestingModule } from '@nestjs/testing';
import { DataService } from './data.service';
import { DataModule } from './data.module';
import { getModelToken } from '@nestjs/mongoose';

describe('DataService', () => {
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
  });

  it('should be defined', () => {
    expect(dataService).toBeDefined();
  });
});
