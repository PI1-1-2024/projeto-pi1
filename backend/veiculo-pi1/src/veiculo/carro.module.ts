import { Module } from '@nestjs/common';
import { CarroController } from './controller/carro.controller';
import { CarroRepository } from './repository/carro.repository';
import { CarroService } from './service/carro.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DadosVeicularesEntity } from './entity/dadosVeiculares.entity';
@Module({
  imports: [TypeOrmModule.forFeature([DadosVeicularesEntity])],
  controllers: [CarroController],
  providers: [CarroRepository, CarroService],
})
export class CarroModule {}
