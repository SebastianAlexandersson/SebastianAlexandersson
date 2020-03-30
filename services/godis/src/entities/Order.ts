import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Consumer } from './Consumer';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Consumer, consumer => consumer.id)
  consumer: Consumer;
}
