import { Test, TestingModule } from '@nestjs/testing';
import { DataService } from './data.service';
import { DataModule } from './data.module';
import { Data } from './interfaces/data.interface';
import { getModelToken } from '@nestjs/mongoose';

describe('DataService', () => {
  let dataService: DataService;

  const testData = {
    type: 'type',
    title: 'title',
    subtitle: 'subtitle',
    body: 'body',
    icons: ['icons'],
    duration: 'duration',
    received: 'received',
  };

  const mockDataModel = {
    findByType(type: string) {
      return [testData];
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DataModule],
    })
      .overrideProvider(getModelToken('Data'))
      .useValue(mockDataModel)
      .compile();

    dataService = module.get<DataService>(DataService);
  });

  it('should be defined', () => {
    expect(dataService).toBeDefined();
  });

  it('findByType should return a value', () => {
    dataService.findByType('test');
    expect(mockDataModel.findByType('test')).toStrictEqual([testData]);
  });
});
