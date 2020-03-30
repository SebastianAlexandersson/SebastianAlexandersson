import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne } from 'typeorm';
import { Product } from './Product';
import { Order } from './Order';

@Entity()
export class OrderProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Order, order => order.id)
  order: Order;

  @ManyToOne(type => Product, product => product.id)
  product: Product;
}
