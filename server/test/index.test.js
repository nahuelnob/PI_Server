const app = require("../src/server");
const session = require("supertest");
const agent = session(app);

describe("Test de rutas", () => {
  describe("GET /countries/:id", () => {
    it("Responde con un status:200", async () => {
      const response = await agent.get("/countries/arg");
      expect(response.statusCode).toBe(200);
    });

    it('Responde un objeto con las propiedades: "id", "name", "flags", "continent", "capital", "origin",  "area", "population" y "Activities"', async () => {
      const { body } = await agent.get("/countries/arg");
      expect(body).toHaveProperty("id");
      expect(body).toHaveProperty("name");
      expect(body).toHaveProperty("flags");
      expect(body).toHaveProperty("continent");
      expect(body).toHaveProperty("capital");
      expect(body).toHaveProperty("subRegion");
      expect(body).toHaveProperty("area");
      expect(body).toHaveProperty("population");
      expect(body).toHaveProperty("Activities");
    });

    it("Si existe un error responde con Status:500", async () => {
      id = "NOB";
      const response = await agent.get(`/countries/${id}`);
      expect(response.statusCode).toBe(500);
    });
  });

  describe("GET /countries?name=name", () => {
    it("Responde con un Status: 200", async () => {
      const response = await agent.get(`/countries?name=argentina`);
      expect(response.statusCode).toBe(200);
    });
    it("Debe devolver un array", async () => {
      const { body } = await agent.get(`/countries?name=arg`);
      expect(body).toBeInstanceOf(Array);
    });
    it("Es array?", async () => {
      const { body } = await agent.get(`/countries?name=argentina`);
      expect(body[0].capital).toBe("Buenos Aires");
    });
  });

  describe("POST /activities", () => {
    const act_01 = {
      name: "Coloso Marcelo Bielsa",
      difficulty: 5,
      duration: "01:30",
      season: "spring",
      country: "ARG",
    };

    it("Corroborar que la propiedad name enviada es la correcta", async () => {
      const { body } = await agent.post("/activities").send(act_01);
      expect(body.name).toBe("Coloso Marcelo Bielsa");
    });
  });
});
