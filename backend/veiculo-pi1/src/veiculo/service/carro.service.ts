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
    dadosVeicularesEntity.nome_percurso = dadosPercurso.nome_percurso;
    dadosVeicularesEntity.data_criacao = new Date();

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
        numero_percurso: percurso.nome_percurso,
      };
    });
    return percursos;
  }

  async buscarPercusoPorId(id: number) {
    const percursoSalvo = await this.carroRepository.buscarPercursoPorId(id);

    return {
      velocidade: percursoSalvo.velocidade,
      aceleracao: percursoSalvo.aceleracao,
      tempo: percursoSalvo.tempo,
      consumo_energetico: percursoSalvo.consumo_energetico,
      numero_percurso: percursoSalvo.nome_percurso,
    };
  }

  async buscarPercusoPorNumeroPercurso(nomePercurso: string) {
    const percursoSalvo =
      await this.carroRepository.buscarPercursoPorNumeroPercurso(nomePercurso);

    return percursoSalvo.map((percurso) => {
      return {
        numero_percurso: percurso.nome_percurso,
        velocidade: percurso.velocidade,
      };
    });
  }
}
