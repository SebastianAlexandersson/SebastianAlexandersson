import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Producer } from './Producer'
import { OrderProduct } from './OrderProduct'

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  qty: number;

  @Column()
  price: number;

  @ManyToOne(type => Producer, producer => producer.name)  
  producer: Producer;
};
