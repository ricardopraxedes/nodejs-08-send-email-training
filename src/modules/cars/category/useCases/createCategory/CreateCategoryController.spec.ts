import request from "supertest";
import { app } from "../../../../../shared/infra/http";

describe("Create category controller", () => {
  it("should be possible to create a new category", async () => {
    const response = await request(app).post("/categories").send({
      name: "Category supertest",
      description: "Category description",
    });

    expect(response.status).toBe(201);
  });
});
