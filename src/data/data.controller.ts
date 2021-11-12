import { Controller, Get, HttpStatus, Res, Param } from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';
import { DataService } from './data.service';

@Controller('data')
export class DataController {
  constructor(private readonly DataService: DataService) {}

  @Get(':type')
  @ApiParam({
    name: 'type',
    required: true,
    description: 'Type of the data-block',
    schema: { oneOf: [{ type: 'string' }] },
  })
  async findByType(@Param() params, @Res() res) {
    const list = await this.DataService.findByType(params.type);
    return res.status(HttpStatus.OK).json(list);
  }
}
