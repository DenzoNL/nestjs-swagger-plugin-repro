import { Injectable, Inject } from '@nestjs/common';
import { Repository, DeleteResult } from 'typeorm';
import { Photo } from './photo.entity';

@Injectable()
export class PhotoService {
  constructor(
    @Inject('PHOTO_REPOSITORY')
    private readonly photoRepository: Repository<Photo>,
  ) {}

  async findAll(): Promise<Photo[]> {
    return this.photoRepository.find();
  }

  async delete(id: number): Promise<DeleteResult> {
    return new DeleteResult();
  }
}
