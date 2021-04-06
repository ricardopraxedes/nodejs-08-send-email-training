import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateCarsSpecifications1617740955500
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "cars_specifications",
        columns: [
          {
            name: "car_id",
            type: "uuid",
          },
          {
            name: "specification_id",
            type: "uuid",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "cars_specifications",
      new TableForeignKey({
        name: "FKCarSpecification",
        referencedTableName: "cars",
        columnNames: ["car_id"],
        referencedColumnNames: ["id"],
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
    );

    await queryRunner.createForeignKey(
      "cars_specifications",
      new TableForeignKey({
        name: "FKSpecificationCar",
        referencedTableName: "specifications",
        columnNames: ["specification_id"],
        referencedColumnNames: ["id"],
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      "cars_specifications",
      "FKSpecificationCar"
    );
    await queryRunner.dropForeignKey(
      "cars_specifications",
      "FKCarSpecification"
    );
    await queryRunner.dropTable("cars_specifications");
  }
}
