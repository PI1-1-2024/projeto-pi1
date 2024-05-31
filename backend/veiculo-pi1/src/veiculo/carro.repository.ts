import { Injectable } from '@nestjs/common';
import { DadosCarroDto } from './dto/DadosCarro.dto';

@Injectable()
export class CarroRepository {
  private dadosPercurso: DadosCarroDto[] = [];

  criarPercuso(dadosPercurso: DadosCarroDto) {
    this.dadosPercurso.push(dadosPercurso);
  }

  obterPercusos() {
    return this.dadosPercurso;
  }
}
