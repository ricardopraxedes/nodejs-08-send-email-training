import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersPasswordTokens1618499239420
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "userspasswordtokens",
        columns: [
          { name: "id", type: "uuid", isPrimary: true },
          { name: "user_id", type: "uuid" },
          { name: "passwordToken", type: "uuid" },
          { name: "expiration", type: "timestamp" },
          { name: "created_at", type: "timestamp", default: "now()" },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("userspasswordtokens");
  }
}
