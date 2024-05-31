import { Injectable } from '@nestjs/common';
import { DadosVeicularesEnity } from '../entity/dadosVeiculares.enity';

@Injectable()
export class CarroRepository {
  private dadosPercurso: DadosVeicularesEnity[] = [];

  criarPercuso(dadosPercurso: DadosVeicularesEnity) {
    this.dadosPercurso.push(dadosPercurso);
  }

  obterPercusos() {
    return this.dadosPercurso;
  }
}
