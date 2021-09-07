import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Post } from '../entities/Post';
import { Appointment } from './Appointment';

@Entity('users')
class User {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  admin: boolean;

  @Column()
  password: string;

  @Column()
  country: string;

  @Column()
  about: string;

  @Column()
  avatar: string;

  @Column()
  timezone: string;

  @Column()
  startTime: string;

  @Column()
  endTime: string;

  @UpdateDateColumn()
  update_at: Date;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => Appointment, appointment => appointment.student, )
  student: Appointment[];


  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User };
