const {app} = require("../src/server.js");
const supertest = require("supertest");
const request = supertest(app);

describe("API server", ()=>{
    it("handles error", async( ) =>{
        const response = await request.get('/')
    })


});