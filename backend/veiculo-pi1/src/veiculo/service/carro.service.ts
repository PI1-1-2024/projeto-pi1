import { CarroRepository } from '../repository/carro.repository';
import { DadosCarroDto } from '../dto/DadosCarro.dto';
import { DadosVeicularesEntity } from '../entity/dadosVeiculares.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CarroService {
  constructor(private carroRepository: CarroRepository) {}

  async criarPercuso(dadosPercurso: DadosCarroDto) {
    const dadosVeicularesEntity = new DadosVeicularesEntity();
    dadosVeicularesEntity.velocidade = dadosPercurso.velocidade;
    dadosVeicularesEntity.aceleracao = dadosPercurso.aceleracao;
    dadosVeicularesEntity.tempo = dadosPercurso.tempo;
    dadosVeicularesEntity.consumo_energetico = dadosPercurso.consumo_energetico;
    dadosVeicularesEntity.numero_percurso = dadosPercurso.numero_percurso;

    await this.carroRepository.salvarPercurso(dadosVeicularesEntity);
  }

  async listarTodosPercursos() {
    const percursosSalvos = await this.carroRepository.listarTodosPercursos();

    const percursos = percursosSalvos.map((percurso) => {
      return {
        velocidade: percurso.velocidade,
        aceleracao: percurso.aceleracao,
        tempo: percurso.tempo,
        consumo_energetico: percurso.consumo_energetico,
        numero_percurso: percurso.numero_percurso,
      };
    });
    return percursos;
  }
}
