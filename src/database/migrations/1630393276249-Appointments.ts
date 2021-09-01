import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class Appointments1630393276249 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'appointments',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
            },
            {
              name: 'provider_id',
              type: 'uuid',
            },
            {
              name: 'student_id',
              type: 'uuid',
            },
            {
              name: 'date',
              type: 'timestamp with time zone',
              isNullable: false,
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
      )

      await queryRunner.createForeignKey(
        'appointments',
        new TableForeignKey({
          name: 'student_Lessons',
          columnNames: ['student_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'users',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        }),
      );

      await queryRunner.createForeignKey(
        'appointments',
        new TableForeignKey({
          name: 'provider_id',
          columnNames: ['provider_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'users',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        }),
      );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('appointments');

    }

}
