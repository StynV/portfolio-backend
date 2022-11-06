import { Controller, Get, HttpStatus, Res, Param } from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';
import { DataService } from './data.service';

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
}
