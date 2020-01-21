import { Controller, Get, Delete, Param } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { ApiResponse } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';

@Controller('photo')
export class PhotoController {
    constructor(protected readonly service: PhotoService) {}

    @Get()
    async findAll() {
        return this.service.findAll();
    }

    @Delete('/:id')
    async deletePhoto(@Param('id') id: number): Promise<DeleteResult> {
        return this.service.delete(id);
    }
}
