import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { User } from '../entities/User';

@Entity('posts')
class Post {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  user_id: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  image: string;

  @Column()
  visible: boolean;

  @Column()
  references: string;

  @UpdateDateColumn()
  update_at: Date;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => User, user => user )
  user: User[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Post };
