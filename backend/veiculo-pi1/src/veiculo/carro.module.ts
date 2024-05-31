import { Module } from '@nestjs/common';
import { CarroController } from './controller/carro.controller';
import { CarroRepository } from './repository/carro.repository';
@Module({
  imports: [],
  controllers: [CarroController],
  providers: [CarroRepository],
})
export class CarroModule {}
