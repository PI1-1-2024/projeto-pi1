import { CarroRepository } from '../repository/carro.repository';
import { DadosCarroDto } from '../dto/DadosCarro.dto';
import { DadosVeicularesEntity } from '../entity/dadosVeiculares.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CarroService {
  constructor(private carroRepository: CarroRepository) {}

  async criarPercuso(dadosPercurso: DadosCarroDto) {
    const usuarioEntity = new DadosVeicularesEntity();
    usuarioEntity.velocidade = dadosPercurso.velocidade;
    usuarioEntity.aceleracao = dadosPercurso.aceleracao;
    usuarioEntity.tempo = dadosPercurso.tempo;
    usuarioEntity.consumo_energetico = dadosPercurso.consumo_energetico;
    usuarioEntity.numero_percurso = dadosPercurso.numero_percurso;

    await this.carroRepository.salvarPercurso(usuarioEntity);
    return usuarioEntity;
  }
}
