import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { User } from '../entities/User';

@Entity('appointments')
class Appointment {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  provider_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'provider_id' })
  provider: User;

  @Column()
  student_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'student_id' }, )
  student: User;

  @Column('time with time zone')
  date: Date;

  @UpdateDateColumn()
  update_at: Date;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Appointment };
