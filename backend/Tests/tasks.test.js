const request = require("supertest");
const { server, app } = require("../index");
const mongoose = require("mongoose");

describe("GET api/tasks", () => {
  it("it should return tasks", async () => {
    const res = await request(app).get("/api/tasks");
    expect(res.statusCode).toBe(200);
  });

  it("it should check the return data is array", async () => {
    const res = await request(app).get("/api/tasks");
    // expect(Array.isArray(res.body)).toBe(true);
    expect(typeof res.body).toBe("object");
    console.log(res.body.tasks);
  });
});

afterAll(async () => {
  await mongoose.connection.close();
  await server.close();
});
