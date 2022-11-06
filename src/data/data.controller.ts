import {
  Controller,
  Get,
  HttpStatus,
  Res,
  Param,
  Post,
  Body,
  Put,
  Query,
  Delete,
} from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';
import { DataService } from './data.service';
import { Data } from './interfaces/data.interface';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Get(':type')
  @ApiParam({
    name: 'type',
    required: true,
    description: 'Type of the data-block',
    schema: { oneOf: [{ type: 'string' }] },
  })
  async findByType(@Param() params, @Res() res) {
    const list = await this.dataService.findByType(params.type);
    return res.status(HttpStatus.OK).json(list);
  }

  @Get('')
  async findAll(@Res() res) {
    const list = await this.dataService.findAll();
    return res.status(HttpStatus.OK).json(list);
  }

  @Post('')
  async create(@Body() dataDto: Data, @Res() res) {
    const result = await this.dataService.create(dataDto);
    return res.status(HttpStatus.CREATED).json(result);
  }

  @Put('')
  async update(
    @Query() query: { type: string },
    @Body() dataDto: Data,
    @Res() res,
  ) {
    const result = await this.dataService.update(query.type, dataDto);
    return res.status(HttpStatus.OK).json(result);
  }

  @Delete('')
  async delete(@Query() query: { type: string }, @Res() res) {
    const result = await this.dataService.delete(query.type);
    return res.status(HttpStatus.OK).json(result);
  }
}
