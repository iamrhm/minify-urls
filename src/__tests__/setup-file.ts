import fs from "fs";
import path from "path";
import mongoose from "mongoose";
import { appConfig } from "./config/app.spec";
import * as dataModels from "./__mocks__/models";

mongoose.Promise = global.Promise;

function toTitleCase(str: string) {
	return str.replace(/\w\S*/g, txt => {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
}

async function populateTestData() {
	const dir = fs.readdirSync(__dirname + "/__mocks__/data");
	const dataFiles = dir.filter(f => f.endsWith(".data.ts"));

	for (const file of dataFiles) {
		const fileName = file.split(".data.ts")[0];
		const modelName = toTitleCase(fileName);
		const model = dataModels[`${modelName}`];

		if (!model) throw new Error(`Cannot find Model '${modelName}'`);
		let fileContents = await import(
			path.join(__dirname + "/__mocks__/data", file)
		);
		fileContents = fileContents[`default`]["list"];
		model.create(fileContents);
	}
}

async function deleteTestData() {
	const collections = Object.keys(mongoose.connection.collections);
	for (const collectionName of collections) {
		const collection = mongoose.connection.collections[collectionName];
		await collection.deleteMany();
	}
}

export function createTestDB() {
	beforeAll(async () => {
		await mongoose.connect(appConfig.db.url, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
		populateTestData();
	});
	// afterAll(async () => {
	// 	await deleteTestData();
	// 	await mongoose.connection.close();
	// });
}
