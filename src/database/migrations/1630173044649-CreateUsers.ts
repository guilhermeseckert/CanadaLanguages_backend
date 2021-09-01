import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsers1630173044649 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
            isNullable:false,
          },
          {
            name: 'password',
            type: 'varchar',
          },
          {
            name: 'country',
            type: 'varchar',
          },
          {
            name: 'about',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'avatar',
            type: 'varchar',
            isNullable: true,
          },

          {
            name: 'admin',
            type: "boolean",
            default: false
          },

          {
            name: 'timezone',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'update_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
