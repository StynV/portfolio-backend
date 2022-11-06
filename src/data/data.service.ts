import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Data } from './interfaces/data.interface';

@Injectable()
export class DataService {
  constructor(@InjectModel('Data') private dataModel: Model<Data>) {}

  async findByType(type: string): Promise<any> {
    return await this.dataModel.find({ type: type }).exec();
  }

  async findAll(): Promise<any> {
    return await this.dataModel.find().exec();
  }
}
