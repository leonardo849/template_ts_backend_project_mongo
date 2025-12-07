import { app } from "./setup.ts"
import request from "supertest"

describe("get /", () => {
    it("return 200 and  hello", async () => {
        const res = await request(app).get("/")
        expect(res.status).toBe(200)
    })
})