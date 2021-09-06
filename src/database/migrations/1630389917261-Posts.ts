import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";
export class Posts1630389917261 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

      await queryRunner.createTable(
        new Table({
          name: 'posts',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
            },
            {
              name: 'user_id',
              type: 'uuid',
              isNullable: true,
            },
            {
              name: 'title',
              type: 'varchar',
            },
            {
              name: 'content',
              type: 'varchar',
            },
            {
              name: 'image',
              type: 'varchar',
              isNullable: true,
            },
            {
              name: 'visible',
              type: "boolean",
              default: false
            },

            {
              name: 'references',
              type: "varchar",
              isNullable: true,
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

      await queryRunner.createForeignKey(
        'posts',
        new TableForeignKey({
          name: 'user_Post',
          columnNames: ['user_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'users',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        }),
      );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('posts');
    }

}
