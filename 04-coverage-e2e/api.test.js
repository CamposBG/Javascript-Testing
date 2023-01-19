const { describe, it } = require("mocha");
const request = require("supertest");
const app = require("./api");
const assert = require("assert");
/**
 * Supertest sobe um servidor na porta 3000 e requisita a API naquela porta
 */

//define suite de testes usando describe
describe("API Suite test", () => {
  describe("/contact", () => {
    it("should request the contact page and return HTTP Status 200", async () => {
      const response = await request(app).get("/contact").expect(200);
      assert.deepStrictEqual(response.text, "contact us page");
    });
  });

  describe("/hello", () => {
    it("should request an inexistent route /hi and redirect to /hello", async () => {
      const response = await request(app).get("/hi").expect(200);
      assert.deepStrictEqual(response.text, "Hello Word");
    });
  });

  describe("/login", () => {
    it("should login successfully on the login route and return HTTP Status 200", async () => {
      const response = await request(app)
        .post("/login")
        .expect(200)
        .send({ username: "Aragorn", password: "123" });
      assert.deepStrictEqual(response.text, "Logging has succeeded!");
    });

    it("should unauthorize a request when requesting it using wrong credentials and return HTTP Status 401", async () => {
      const response = await request(app)
        .post("/login")
        .send({ username: "XuxaDaSilva", password: "123" })
        .expect(401);
      //para avaliar true ou false usamos o ok
      assert.ok(response.unauthorized);
      assert.deepStrictEqual(response.text, "Logging has failed!");
    });
  });
});
