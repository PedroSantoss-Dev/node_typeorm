import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class default1675119027411 implements MigrationInterface {
    name = 'default1675119027411';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "firstName"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "lastName"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "isActive"`);
        await queryRunner.query(
            `ALTER TABLE "user" ADD "name" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "user" ADD "email" character varying NOT NULL`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "name"`);
        await queryRunner.query(
            `ALTER TABLE "user" ADD "isActive" boolean NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "user" ADD "lastName" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "user" ADD "firstName" character varying NOT NULL`,
        );
    }
}
