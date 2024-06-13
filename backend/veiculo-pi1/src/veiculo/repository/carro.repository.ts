import { Injectable } from '@nestjs/common';
import { DadosVeicularesEntity } from '../entity/dadosVeiculares.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CarroRepository {
  constructor(
    @InjectRepository(DadosVeicularesEntity)
    private readonly carroRepository: Repository<DadosVeicularesEntity>,
  ) {}

  salvarPercurso(dadosPercurso: DadosVeicularesEntity) {
    this.carroRepository.save(dadosPercurso);
  }
}
