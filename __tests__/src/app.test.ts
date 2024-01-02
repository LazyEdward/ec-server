import request from 'supertest'
import app from "../../src/app"

describe("app test", () => {
	it("Vaild GET", async() => {
		const res = await request(app).get("/")

		expect(res.status).toEqual(404);
		expect(res.type).toEqual('text/html');
		expect(res.text).toEqual("<b>GET REQUEST NOT SUPPORTED</b>")
	})

	it("Vaild POST", async() => {
		const res = await request(app).post("/")

		expect(res.status).toEqual(404);
		expect(res.body).toEqual({"result": "POST REQUEST NOT SUPPORTED ON ROOT"})
	})
})