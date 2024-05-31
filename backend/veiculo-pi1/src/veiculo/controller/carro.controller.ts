import { Body, Controller, Get, Post } from '@nestjs/common';
import { CarroRepository } from '../repository/carro.repository';
import { DadosCarroDto } from '../dto/DadosCarro.dto';
import { DadosVeicularesEnity } from '../entity/dadosVeiculares.enity';

@Controller('/percurso-carro')
export class CarroController {
  constructor(private carroRepository: CarroRepository) {}
  @Post()
  async criarPercuso(@Body() dadosPercurso: DadosCarroDto) {
    const usuarioEntity = new DadosVeicularesEnity();
    usuarioEntity.velocidade = dadosPercurso.velocidade;
    usuarioEntity.aceleracao = dadosPercurso.aceleracao;
    usuarioEntity.tempo = dadosPercurso.tempo;
    usuarioEntity.consumo_energetico = dadosPercurso.consumo_energetico;
    usuarioEntity.numero_percurso = dadosPercurso.numero_percurso;

    await this.carroRepository.criarPercuso(usuarioEntity);
    return usuarioEntity;
  }

  @Get()
  async obterPercusos() {
    return await this.carroRepository.obterPercusos();
  }
}
