import { Module } from '@nestjs/common';
import { CarroController } from './carro.controller';
import { CarroRepository } from './carro.repository';
@Module({
  imports: [],
  controllers: [CarroController],
  providers: [CarroRepository],
})
export class CarroModule {}
