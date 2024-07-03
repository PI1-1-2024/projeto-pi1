import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('dados_veiculares')
export class DadosVeicularesEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'velocidade', nullable: false, type: 'decimal' })
  velocidade: number;
  @Column({ name: 'aceleracao', nullable: false, type: 'decimal' })
  aceleracao: number;
  @Column({ name: 'tempo', nullable: false, type: 'decimal' })
  tempo: number;
  @Column({ name: 'consumo_energetico', nullable: false, type: 'decimal' })
  consumo_energetico: number;
  @Column({ name: 'nome_percurso', nullable: false })
  nome_percurso: string;
  @Column({ name: 'data_criacao', nullable: false, type: 'timestamp' })
  data_criacao: Date;
}
