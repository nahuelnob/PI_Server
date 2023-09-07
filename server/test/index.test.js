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
    it("La request me debe devolver un array", async () => {
      const { body } = await agent.get(`/countries?name=argentina`);
      expect(body[0].capital).toBe("Buenos Aires");
    });
    it("La request debe traer 2 elementos", async () => {
      const { body } = await agent.get(`/countries?name=arg`);
      expect(body).toHaveLength(2);
    });
    it("La request debe traer 4 elementos", async () => {
      const { body } = await agent.get(`/countries?name=sur`);
      expect(body).toHaveLength(4);
    });
    it("La request debe traer todos los elementos si no le paso nombre", async () => {
      const { body } = await agent.get(`/countries?name=`);
      expect(body).toHaveLength(250);
    });
  });

  describe("POST /activities", () => {
    const act_01 = {
      id : 3001, 
      name: 'Actividad X',
      difficulty: 5,
      duration: "01:30",
      season: "Primavera",
      country: "ARG",
    };

    it("Corroborar que la Actividad se cree correctamente", async () => {
      const { body } = await agent.post("/activities").send(act_01);
      expect(body).toHaveProperty("id");
      expect(body).toHaveProperty("name");
      expect(body).toHaveProperty("difficulty");
      expect(body).toHaveProperty("duration");
      expect(body).toHaveProperty("season");
      expect(body.name).toBe("Actividad X");
      expect(body.season).toBe("Primavera");
      await agent.delete("/activities/3001")
    });

    const act_02 = {
      id : 3002, 
      difficulty: 5,
      duration: "01:30",
      season: "Primavera",
      country: "ARG",
    };
    it("Si faltan datos debe devolver un error", async () => {
      const response = await agent.post("/activities").send(act_02);
      expect(response.statusCode).toBe(500);
      expect(response.body).toEqual({ error: "Faltan datos" });
    });
  });
});