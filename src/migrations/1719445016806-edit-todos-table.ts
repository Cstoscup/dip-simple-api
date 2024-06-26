import { MigrationInterface, QueryRunner } from 'typeorm';

export class EditTodosTable1719445016806 implements MigrationInterface {
  name = 'EditTodosTable1719445016806';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "todo" ADD "title" character varying`);
    await queryRunner.query(
      `ALTER TABLE "todo" ALTER COLUMN "createdAt" SET NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "todo" ALTER COLUMN "createdAt" DROP NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "title"`);
  }
}
