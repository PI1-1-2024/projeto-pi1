import { Module } from '@nestjs/common';
import { CarroModule } from './veiculo/carro.module';

@Module({
  imports: [CarroModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
