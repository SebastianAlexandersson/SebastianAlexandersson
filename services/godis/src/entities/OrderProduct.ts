import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Order } from './Order';
import { Product } from './Product'

@Entity()
export class OrderProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Order, order => order.id)
  order: Order;

  @OneToOne(type => Product)
  @JoinColumn()
  product: Product;

  @Column()
  qty: number;
}
