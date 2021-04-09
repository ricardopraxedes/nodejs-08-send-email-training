import request from "supertest";
import { v4 as uuidV4 } from "uuid";
import { hashSync } from "bcryptjs";
import { Connection } from "typeorm";
import { app } from "../../../../../shared/infra/http";
import { createDBConnection } from "../../../../../shared/infra/typeorm";

describe("Create category controller", () => {
  let connection: Connection;

  beforeAll(async () => {
    const id = uuidV4();
    const password = hashSync("admin", 8);

    connection = await createDBConnection();

    await connection.runMigrations();

    await connection.query(
      `INSERT INTO users (id,email,password,"isAdmin",created_at) VALUES ('${id}','admin@admin.com','${password}',true,'now()')`
    );
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it("should be possible to create a new category", async () => {
    const sessionResponse = await request(app).post("/sessions").send({
      email: "admin@admin.com",
      password: "admin",
    });

    const { token } = sessionResponse.body;

    const response = await request(app)
      .post("/categories")
      .send({
        name: "Category supertest",
        description: "Category description",
      })
      .set({
        Authorization: `Bearer ${token}`,
      });

    expect(response.status).toBe(201);
  });

  it("should not be possible to create a new category with the same name", async () => {
    const sessionResponse = await request(app).post("/sessions").send({
      email: "admin@admin.com",
      password: "admin",
    });

    const { token } = sessionResponse.body;

    const response = await request(app)
      .post("/categories")
      .send({
        name: "Category supertest",
        description: "Category description",
      })
      .set({
        Authorization: `Bearer ${token}`,
      });

    expect(response.status).toBe(400);
  });
});
