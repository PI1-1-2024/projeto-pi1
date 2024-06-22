import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DadosVeicularesEntity } from '../entity/dadosVeiculares.entity';

@Injectable()
export class CarroRepository {
  constructor(
    @InjectRepository(DadosVeicularesEntity)
    private readonly carroRepository: Repository<DadosVeicularesEntity>,
  ) {}

  salvarPercurso(dadosPercurso: DadosVeicularesEntity) {
    this.carroRepository.save(dadosPercurso);
  }

  async listarTodosPercursos(): Promise<DadosVeicularesEntity[]> {
    return this.carroRepository.find();
  }

  async buscarPercursoPorId(id: number): Promise<DadosVeicularesEntity> {
    return this.carroRepository.findOneById(id);
  }
}
