import express from "express";
import * as bodyParser from "body-parser";
import mongoose from "mongoose";
import morgan from "morgan";
import swaggerJsdoc from "swagger-jsdoc";
import * as swaggerUi from "swagger-ui-express";
import cors from "cors";
import cookieParser from "cookie-parser";

import { appConfig } from "./config/app";
import * as swaggerConfig from "./config/swagger.json";
import { Routes } from "./routes/routes";

class App {
	public app: express.Application;
	public routePrv: Routes = new Routes();
	public mongoUrl: string = appConfig.db.url;

	constructor() {
		this.app = express();
		this.config();
		this.routePrv.routes(this.app);
		this.mongoSetup();
		this.swaggerSetup();
	}

	private config(): void {
		this.app.use(morgan("tiny"));
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({ extended: false }));
		this.app.use(cors());
		this.app.use(cookieParser());
	}

	private mongoSetup(): void {
		mongoose.Promise = global.Promise;
		mongoose.connect(this.mongoUrl, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
	}

	private swaggerSetup(): void {
		const specs = swaggerJsdoc(swaggerConfig);
		this.app.use("/api/docs", swaggerUi.serve);
		this.app.get(
			"/api/docs",
			swaggerUi.setup(specs, {
				explorer: true
			})
		);
	}
}

export default new App().app;
