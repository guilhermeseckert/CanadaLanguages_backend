import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddAddStartTimeAndEndTimeColoum1630996113754 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn(
        'users',
        new TableColumn({
          name: 'startTime',
          type: 'varchar',
          isNullable: false,
        }),
      );

      await queryRunner.addColumn(
        'users',
        new TableColumn({
          name: 'endTime',
          type: 'varchar',
          isNullable: false,
        }),
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn('users', 'endTime');
      await queryRunner.dropColumn('users', 'startTime');
    }

}
