import { Test, TestingModule } from '@nestjs/testing';
import { DataService } from './data.service';
import { DataModule } from './data.module';
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
    findAll() {
      return [testData];
    },
    create(testData) {
      return testData;
    },
    update(testData) {
      return testData;
    },
    delete(testData) {
      return testData;
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

  it('findAll should return a value', () => {
    dataService.findAll();
    expect(mockDataModel.findAll()).toStrictEqual([testData]);
  });

  it('create should return a value', () => {
    expect(mockDataModel.create(testData)).toStrictEqual(testData);
  });

  it('update should return a value', () => {
    expect(mockDataModel.update(testData)).toStrictEqual(testData);
  });

  it('delete should return a value', () => {
    expect(mockDataModel.delete(testData)).toStrictEqual(testData);
  });
});
