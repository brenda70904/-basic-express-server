const { app } = require("../src/server.js");
const supertest = require("supertest");
const request = supertest(app);

describe("API server", () => {

    //404 on a bad method
    test("handles invalid requests", async () => {
        const response = await request.get("/banana");
        expect(response.status).toEqual(404);
    });

    // 404 on bad route
    it("handle bad routes", async () => {
        const response = await request.get("/banana");
        expect(response.status).toEqual(404);
    });

    //500 if no name in the query string
    it("handle /person routes with invalid query", async () => {
        const response = await request.get("/person?name=");
        expect(response.status).toEqual(500);
    });

    //200 if the name is in the query string
    it("handle name in the quary string, output object", async()=>{
        const response = await request.get("/person?name=Brenda");
        expect(response.status).toBe(200);
        
    });

    //rooth path
    it("check root path", async()=>{
        const response = await request.get("/");
        expect(response.status).toBe(200);
    });
});
