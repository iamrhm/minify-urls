import app from "../../app";
import request from "supertest";
import { createTestDB } from "../setup-file";
import MockUser from "../__mocks__/data/user.data";

createTestDB();

describe("test suite for user routes", () => {
	const listUser = MockUser.list;
	const oldUser = MockUser.old;
	const newUser = MockUser.new;

	it("it will check get users", async () => {
		let response = await request(app)
			.get("/api/user/")
			.set("Accept", "application/json")
			.expect(200);
		expect(response.body).toHaveLength(listUser.length);
	});

	it("it will check post user", async () => {
		let response = await request(app)
			.post("/api/user/")
			.send({ ...newUser })
			.set("Accept", "application/json")
			.expect(200);
		expect(response.body.name).toEqual(newUser.name);
	});

	it("it will get specific user", async () => {
		const allUserRes = await request(app)
			.get("/api/user/")
			.set("Accept", "application/json")
			.expect(200);
		const queryUser = allUserRes.body[0];
		const uniqueUserRes = await request(app)
			.get("/api/user/" + queryUser._id)
			.set("Accept", "application/json")
			.expect(200);
		expect(uniqueUserRes.body).toEqual(queryUser);
	});

	it("it will update specific user", async () => {
		const allUserRes = await request(app)
			.get("/api/user/")
			.set("Accept", "application/json")
			.expect(200);
		const queryUser = allUserRes.body[0];
		const updatedData = { ...queryUser, password: "updated@password" };
		const updatedRes = await request(app)
			.put("/api/user/" + updatedData._id)
			.send({ ...updatedData })
			.set("Accept", "application/json")
			.expect(200);
		expect(updatedRes.body).toEqual(updatedData);
	});

	it("it will delete specific user", async () => {
		const allUserRes = await request(app)
			.get("/api/user/")
			.set("Accept", "application/json")
			.expect(200);
		const queryUser = allUserRes.body[allUserRes.body.length - 1];

		const response = await request(app)
			.delete("/api/user/" + queryUser._id)
			.set("Accept", "application/json")
			.expect(200);
		expect(response.body.message).toEqual("Successfully deleted user!");
	});
});
