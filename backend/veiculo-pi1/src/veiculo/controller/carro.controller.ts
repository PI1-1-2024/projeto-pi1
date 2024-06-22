import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DadosCarroDto } from '../dto/DadosCarro.dto';
import { CarroService } from '../service/carro.service';

@Controller('/percurso-carro')
export class CarroController {
  constructor(private carroService: CarroService) {}
  @Post()
  async criarPercuso(@Body() dadosPercurso: DadosCarroDto) {
    await this.carroService.criarPercuso(dadosPercurso);
    return dadosPercurso;
  }

  @Get()
  async listarPercursos() {
    return this.carroService.listarTodosPercursos();
  }

  @Get(':id')
  async buscarPercusoPorId(@Param('id') id: number) {
    return this.carroService.buscarPercusoPorId(id);
  }
}
