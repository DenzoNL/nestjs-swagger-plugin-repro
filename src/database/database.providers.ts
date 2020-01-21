import { createConnection } from 'typeorm';
import { Photo } from '../photo/photo.entity';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'sqlite',
      database: 'database.db',
      entities: [
          Photo,
      ],
      synchronize: true,
    }),
  },
];
