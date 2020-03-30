import { Entity, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { Consumer } from './Consumer';
import { OrderProduct } from './OrderProduct'

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type => Consumer)
  @JoinColumn()
  consumer: Consumer;

  @OneToMany(type => OrderProduct, orderProduct => orderProduct.order)
  orderProduct: OrderProduct[];
}
