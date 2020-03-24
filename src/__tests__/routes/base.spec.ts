import app from "../../app";
import request from "supertest";

describe("testing base route", () => {
	it("will return GET request successfulll!!!!", async () => {
		const response = await request(app)
			.get("/")
			.expect(200);
		expect(response.body.message).toEqual("GET request successfulll!!!!");
	});
});
