import { Body, Controller, Get, Post } from '@nestjs/common';
import { CarroRepository } from './carro.repository';
import { DadosCarroDto } from './dto/DadosCarro.dto';

@Controller('/percurso-carro')
export class CarroController {
  constructor(private carroRepository: CarroRepository) {}
  @Post()
  async criarPercuso(@Body() dadosPercurso: DadosCarroDto) {
    await this.carroRepository.criarPercuso(dadosPercurso);
    return dadosPercurso;
  }

  @Get()
  async obterPercusos() {
    return await this.carroRepository.obterPercusos();
  }
}
